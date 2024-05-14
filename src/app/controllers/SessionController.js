import * as Yup from 'yup'
import User from '../models/User'

class SessionController {
  async store(request, response) {
    const schema = Yup.object().shape({
      username: Yup.string().required(),
      password: Yup.string().required(),
    })

    const userUsernameOrPasswordIncorrect = () => {
      return response
        .status(400)
        .json({ error: 'Senha ou Username incorretos' })
    }
    if (!(await schema.isValid(request.body))) {
      userUsernameOrPasswordIncorrect()
    }

    const { username, password } = request.body

    const user = await User.findOne({
      where: { username },
    })

    if (!user) {
      return  userUsernameOrPasswordIncorrect()
    }

    if (user.password !== password) {
      return userUsernameOrPasswordIncorrect();
    }

    return response.json({
      id: user.id,
      username: user.username,
    })
  }
}

export default new SessionController()
