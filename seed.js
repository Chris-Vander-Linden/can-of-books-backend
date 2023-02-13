'use strict';

require('dotenv').config();
const mongoose = require('mongoose');

const BookCollection = require('./models/books.js');

(async function () {
  // I had to put this inside async function to make sure BookCollection would run after.
  await mongoose.connect(process.env.MONGOURL);

  await BookCollection.create({
    title: 'An awful old book',
    description: 'It\'s a pretty bad book!',
    status: 'outdated book'
  });

  //book.save();
  console.log('Closing the DB connection for our seed file');
  mongoose.disconnect();
})();

//seed();
