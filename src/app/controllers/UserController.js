import { v4 } from 'uuid'
import * as Yup from 'yup'

import User from '../models/User'

class UserController {
  async store(request, response) {
    const schema = Yup.object().shape({
      name: Yup.string().required(),
      username: Yup.string().required(),
      password: Yup.string().required().min(8),
    })

    try {
      await schema.validateSync(request.body, { abortEarly: false })
    } catch (err) {
      return response.status(400).json({ error: err.errors })
    }

    const { name, username, password } = request.body

    console.log("Creating user "); 

    const userExists = await User.findOne({
      where: { username },
    })
    if (userExists) {
      return response.status(400).json({ error: 'User already exists' })
    }

    try {
      const user = await User.create({
        id: v4(),
        name,
        username,
        password,
      });
      return response.status(201).json(user);
    } catch (error) {
      console.error("Error creating user:", error); 
      return response.status(500).json({ error: 'Internal server error, unable to create user.' });
    }
  }

}

export default new UserController()
