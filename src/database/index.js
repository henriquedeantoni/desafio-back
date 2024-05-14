import Sequelize from 'sequelize'
import configDataBase from '../config/database'

import User from '../app/models/User'
import Message from '../app/models/Message'

const models = [User, Message]

class Database {
  constructor() {
    this.init()
  }

  init() {
    this.connection = new Sequelize(configDataBase)
    models.map((model) => model.init(this.connection))
    models.map(
      (model) => model.associate && model.associate(this.connection.models),
    )
  }
}

export default new Database()
