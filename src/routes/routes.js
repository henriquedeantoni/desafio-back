import SessionController from '../app/controllers/SessionController'
import MessageController from '../app/controllers/MessageController'
import UserController from '../app/controllers/UserController'

import { Router } from 'express'



const routes = new Router()

routes.post('/users', UserController.store)

routes.post('/sessions', SessionController.store)

routes.post('/messages', MessageController.store)

routes.get('/messages', MessageController.index)

export default routes
