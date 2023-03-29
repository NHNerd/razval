const express = require('express');
const app = express();
const fs = require('fs');
const bodyParser = require('body-parser');

app.set('view engine', 'ejs'); // Connecting modul for application
app.use(express.static('public'));
// Middleware to handle JSON data
app.use(express.json());
app.use(bodyParser.json());

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

app.post('/razval', (req, res) => {
  fs.readFile('public/data/razvalCards.json', 'utf-8', (error, data) => {
    let dataArray = JSON.parse(data); // parse the existing array
    dataArray.push(req.body); // push the new item into the array
    fs.writeFile(
      'public/data/razvalCards2.json',
      JSON.stringify(dataArray),
      (error) => {
        error ? console.log(error) : null;
      }
    );
  });
});

const PORT = 3000;
const HOST = 'localhost';

app.listen(PORT, () => {
  console.log(`Server started.\nhttp://${HOST}:${PORT}`);
});
