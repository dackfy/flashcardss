'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Question extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate({ Them }) {
      this.belongsTo(Them, { foreignKey: 'them_id' });
      // define association here
    }
  }
  Question.init(
    {
      question: {
        type: DataTypes.TEXT,
        allowNull: false,
      },
      answer: {
        type: DataTypes.TEXT,
        allowNull: false,
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
    {
      sequelize,
      modelName: 'Question',
    }
  );
  return Question;
};
