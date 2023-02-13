'use strict';

require('dotenv').config();
const express = require('express');
const cors = require('cors');

const app = express();
app.use(cors());

const PORT = process.env.PORT || 3001;

const mongoose = require('mongoose');

mongoose.connect(process.env.MONGOURL);

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function () {
  console.log('Mongoose is connected');
});

const BookCollection = require('./models/books.js');

app.get('/', (request, response) => {
  response.send('Home');
});

app.get('/books', (request, response) => {


  BookCollection.find({ title: 'A great new book' }, (err, book) => {
    if (err) return console.error(err);
    console.log(book);
    response.status(200).send(book);
  });
});

app.get('*', (request, response) => {
  response.status(404).send('Not available');
});

// ERROR
// eslint-disable-next-line no-unused-vars
app.use((error, request, res, next) => {
  res.status(500).send(error.message);
});

app.listen(PORT, () => console.log(`listening on ${PORT}`));
