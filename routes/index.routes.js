const router = require('express').Router();

const { Them } = require('../db/models');
const { User } = require('../db/models');

const MainPage = require('../components/pages/MainPage');
const GamePage = require('../components/pages/GamePage');

router.get('/', async (req, res) => {
  const themes = await Them.findAll();

  const user = await User.findAll();

  const html = res.renderComponent(MainPage, { themes, user });
  res.send(html);
});

router.post('/login', async (req, res) => {
  const { name } = req.body;

  const user = await User.create({ name });
  res.app.locals.user = user;
  res.redirect('/game');
});

router.get('/game', async (req, res) => {
  const themes = await Them.findAll();

  const user = await User.findAll({ order: [['id', 'DESC']] });

  const html = res.renderComponent(GamePage, { themes, user: user[0] });
  res.send(html);
});

module.exports = router;
