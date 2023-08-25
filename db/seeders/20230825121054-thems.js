'use strict';

const { Them, Question } = require('../models');

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    const thems = await Them.bulkCreate(
      [
        {
          title: 'ЗАШКВАР',
          Questions: [
            {
              question:
                'Если жёлтый мячик бросить в Чёрное море, каким он будет?',
              answer: 'Мокрым',
            },
            {
              question: 'До каких пор можно идти в лес?',
              answer: 'До середины',
            },
            {
              question: 'Что не войдёт в самую большую кастрюлю?',
              answer: 'Крышка',
            },
            {
              question: 'Сколько яиц можно съесть натощак?',
              answer: 'Одно',
            },
            {
              question: 'Какими нотами можно измерить пространство?',
              answer: 'Ми-ля-ми',
            },
          ],
        },
        {
          title: 'АССОРТИ',
          Questions: [
            {
              question:
                'Какую спортивную игру Джеймс Нейсмит изобрел в 1891 году?',
              answer: 'Баскетбол',
            },
            {
              question: ' Как зовут Лютоволка Джона Сноу?',
              answer: 'Призрак',
            },
            {
              question: 'Кто является национальным животным Шотландии?',
              answer: 'Единорог',
            },
            {
              question: 'Какая страна производит больше всего в мире кофе?',
              answer: 'Бразилия',
            },
            {
              question:
                'Какой безалкогольный напиток первым был взят в космос?',
              answer: 'Кока-Кола',
            },
          ],
        },
      ],
      { include: [Question] }
    );
  },

  async down(queryInterface, Sequelize) {
    await Them.destroy({ truncate: { cascade: true } });
  },
};
