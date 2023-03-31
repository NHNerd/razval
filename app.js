const express = require('express');
const app = express();

const homepageRouter = require('./routes/homepage');
const razvalRouter = require('./routes/razval');
const adRouter = require('./routes/ad');

app.set('view engine', 'ejs'); // Connecting modul for application
app.use(express.static('public'));
app.use(express.json());

app.use('/', homepageRouter);
app.use('/razval', razvalRouter);
app.use('/ad', adRouter);

const PORT = 3000;
const HOST = 'localhost';

app.listen(PORT, () => console.log(`Server started.\nhttp://${HOST}:${PORT}`));
