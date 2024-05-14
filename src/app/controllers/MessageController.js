import * as Yup from 'yup'
import Message from '../models/Message'

class MessageController {
  async store(request, response) {
    const schema = Yup.object().shape({
      date: Yup.date().required(),
      content: Yup.string().required(),
      user_id: Yup.string().uuid().required(),
    })

    try {
      await schema.validateSync(request.body, { abortEarly: false })
    } catch (err) {
      return response.status(400).json({ error: err.errors })
    }

    const {
      date,
      content,
      user_id,
    } = request.body

    const message = await Message.create({
      date,
      content,
      user_id,
    })
    return response.json(message)
  }

  async index(request, response) {
    try {
      
      const messages = await Message.findAll();

      return response.json(messages);
      } catch (error) {
      console.error('Error fetching messages:', error);
      return response.status(500).json({ error: 'Internal server error' });
    }
  }

}

export default new MessageController()
