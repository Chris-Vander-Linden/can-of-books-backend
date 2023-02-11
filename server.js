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

const BookModel = require('./models/books');

app.get('/books', (request, response) => {

  const book = new BookModel({
    title: 'Bobby',
    description: 'stuff',
    status: 'thank you'
  });
  book.save();

  BookModel.find((err, book) => {
    if (err) return console.error(err);
    console.log(book);
    response.send(book);
  });

  BookModel.find({ title: 'Bobby' }, (err, book) => {
    if (err) return console.error(err);
    console.log(book);
  });

  //response.send('test request received');

});

app.listen(PORT, () => console.log(`listening on ${PORT}`));
