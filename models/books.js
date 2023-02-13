'use strict';

const mongoose = require('mongoose');

// https://mongoosejs.com/docs/guide.html
const bookSchema = new mongoose.Schema({
  title: { type: String, require: true },
  description: { type: String, require: true },
  status: { type: String, require: true }
});

// Creates a Model this tells mongo DB what the name of the collection (book-collection) and schema (bookSchema) will be
// https://mongoosejs.com/docs/models.html
const BookModel = mongoose.model('book-collection', bookSchema);

module.exports = BookModel;
