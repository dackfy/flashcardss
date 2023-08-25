'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Game extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate({ User, Them }) {
      this.belongsTo(User, { foreignKey: 'user_id' });
      this.belongsTo(Them, { foreignKey: 'them_id' });
      // define association here
      // done
    }
  }
  Game.init(
    {
      user_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
          model: 'Users',
          key: 'id',
        },
        onDelete: 'cascade',
      },
      scores: {
        type: DataTypes.INTEGER,
      },
      them_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
          model: 'Thems',
          key: 'id',
        },
        onDelete: 'cascade',
      },
    },
    {
      sequelize,
      modelName: 'Game',
    }
  );
  return Game;
};
