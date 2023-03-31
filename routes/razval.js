const express = require('express');
const router = express.Router();
const fs = require('fs');

router.get('/', (req, res) => {
  res.render('razval');
});

router.get('/admin', (req, res) => {
  res.render('admin');
});

// Adding new item
router.post('/', (req, res) => {
  fs.readFile('public/data/razvalCards.json', 'utf-8', (error, data) => {
    if (error) {
      console.log(error);
      res.status(500).send('Server error');
    } else {
      const dataArray = JSON.parse(data);
      dataArray.push(req.body);
      fs.writeFile(
        'public/data/razvalCards.json',
        JSON.stringify(dataArray),
        (error) => {
          if (error) {
            console.log(error);
            res.status(500).send('Server error');
          } else {
            res.status(200).send('Item added successfully');
          }
        }
      );
    }
  });
});

module.exports = router;
