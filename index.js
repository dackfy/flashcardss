require('@babel/register');

const express = require('express');

const morgan = require('morgan');
const path = require('path');

const ssr = require('./middlewares/ssr');

const indexRouter = require('./routes/index.routes');

const app = express();

app.use(ssr);

app.use(morgan('dev'));
app.use(express.urlencoded());

app.use(express.static(path.join(__dirname, '../public')));

app.use(express.json());

app.use('/', indexRouter);

const PORT = 4000;

app.listen(PORT, () => console.log(`Я запустился на ${PORT}`));
