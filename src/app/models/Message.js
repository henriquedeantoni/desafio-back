import Sequelize, { Model } from 'sequelize'

class Message extends Model {
  static init(sequelize) {
    super.init(
      {
        date: Sequelize.DATE,
        content: Sequelize.STRING,
      },
      {
        sequelize,
      },
    )
    return this
  }

  static associate(models) {
    this.belongsTo(models.User, {
      foreignKey: 'user_id',
      as: 'user',
    })
  }
}

export default Message
