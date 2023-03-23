const express = require('express');
const app = express();
app.set('view engine', 'ejs'); // Connecting modul for application
app.use(express.static('public'));

app.get('/', (req, res) => {
  res.render('homepage');
});

app.get('/razval', (req, res) => {
  res.render('razval');
});

app.get('/razval/admin', (req, res) => {
  res.render('admin');
});

app.get('/dubrovsky', (req, res) => {
  res.render('dubrovsky');
});

const PORT = 3000;
const HOST = 'localhost';

app.listen(PORT, () => {
  console.log(`Server started.\nhttp://${HOST}:${PORT}`);
});
