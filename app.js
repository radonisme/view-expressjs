const express = require('express');
const app = express();
const port = 3000;

// Gunakan EJS
app.set('view engine', 'ejs');

app.get('/', (req, res) => {
  res.render('index', { nama: 'Lebah ganteng' });
});

app.get('/about', (req, res) => {
  res.render('about');
});

app.get('/contact', (req, res) => {
  const contact = [
    {
      nama: 'Tareq Habbyullah',
      no_hp: '0812345678',
      alamat: 'Kendari',
    },
    {
      nama: 'Jonathan',
      no_hp: '081994467',
      alamat: 'Buton',
    },
    {
      nama: 'Ignueir',
      no_hp: '0898223887',
      alamat: 'Makassar',
    },
  ];

  res.render('contact', { contact });
});

// Get by Query
app.get('/users/:userId', (req, res) => {
  res.send(`ID User : ${req.params.userId} <br> Category : ${req.query.category} `);
});

// Get by ID
app.get('/users/:userId/books/:bookId', (req, res) => {
  // res.send(req.params);
  res.send(`ID User : ${req.params.userId} <br> ID Book : ${req.params.bookId} `);
});

app.listen(port, () => {
  console.log(`Server berjalan di Port ${port}`);
});
