const express = require('express');
const app = express();
app.set('view engine', 'ejs'); // Connecting modul for application
app.use(express.static('public'));

app.get('/', (req, res) => {
  res.render('homepage'); // render - function from ejs mudul
});

app.get('/razval', (req, res) => {
  res.render('razval'); // render - function from ejs mudul
});

app.get('/dubrovsky', (req, res) => {
  res.render('dubrovsky'); // render - function from ejs mudul
});

const PORT = 3000;
const HOST = 'localhost';

app.listen(PORT, () => {
  console.log(`Server started.\nhttp://${HOST}:${PORT}`);
});
