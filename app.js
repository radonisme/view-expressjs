const express = require('express');
const app = express();
const port = 3000;

const morgan = require('morgan');

// Gunakan EJS
app.set('view engine', 'ejs');

// Application Level Middleware
// app.use((req, res, next) => {
//   console.log('Time:', Date.now());
//   next();
// });

// Built-In middleware
app.use(express.static('public'));

// Third Party Middleware
// app.use(morgan('common'));

app.get('/', (req, res) => {
  res.render('index', {
    tittle: 'Home',
    nama: 'Lebah ganteng',
  });
});

app.get('/about', (req, res) => {
  res.render('about', {
    tittle: 'About',
  });
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

  res.render('contact', {
    tittle: 'Contact',
    contact,
  });
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

app.use('/', (req, res) => {
  res.status(404);
  res.send('<h1>404 Not Found</h1>');
});

app.listen(port, () => {
  console.log(`Server berjalan di Port ${port}`);
});
