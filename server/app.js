const express = require('express');
const mongoose = require('mongoose');
const homepageRouter = require('./routes/homepage');
const razvalRouter = require('./routes/razval');
const adRouter = require('./routes/ad');
const keys = require('../server/config/keys');
const app = express();

mongoose
  .connect(keys.mongoURI)
  .then(() => console.log('MongoDB is connected'))
  .catch((error) => console.log(error));

app.set('views', './client/views');

app.set('view engine', 'ejs'); // Connecting modul for application

app.use(express.static('client'));
app.use(express.json());

app.use('/', homepageRouter);
app.use('/razval', razvalRouter);
app.use('/ad', adRouter);

module.exports = app;
