import * as Yup from 'yup'
import User from '../models/User'
import jwt from 'jsonwebtoken'

class SessionController {
  async store(request, response) {
    const schema = Yup.object().shape({
      username: Yup.string().required(),
      password: Yup.string().required(),
    })

    const userUsernameOrPasswordIncorrect = () => {
      return response
        .status(400)
        .json({ error: 'username or password incorrect' })
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

    if (!(await user.checkPassword(password))) {
      userEmailOrPasswordIncorrect()
    }

    if (user.password !== password) {
      return userUsernameOrPasswordIncorrect();
    }

    return response.json({
      id: user.id,
      username: user.username,
      name: user.name,
      token: jwt.sign({ id: user.id, name: user.name }, authConfig.secret, {
        expiresIn: authConfig.expiresIn,
      }),
    })
  }
}

export default new SessionController()
