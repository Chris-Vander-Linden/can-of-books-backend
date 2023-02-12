'use strict';

require('dotenv').config();
const mongoose = require('mongoose');
mongoose.connect(process.env.DB_URL);
const BookModel = require('./models/books.js');


const seed = () => {
  const book = new BookModel({
    title: 'A great new book',
    description: 'It\'s a pretty bad book!',
    status: 'outdated book'
  });

  book.save();
};

seed();
