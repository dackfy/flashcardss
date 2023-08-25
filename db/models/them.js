'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Them extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate({ Game, Question }) {
      this.hasMany(Game, { foreignKey: 'them_id' });
      this.hasMany(Question, { foreignKey: 'them_id' });
    }
  }
  Them.init(
    {
      title: {
        type: DataTypes.TEXT,
        allowNull: false,
      },
    },
    {
      sequelize,
      modelName: 'Them',
    }
  );
  return Them;
};
