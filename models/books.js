'use strict';

const mongoose = require('mongoose');

const bookSchema = new mongoose.Schema({
  title: { type: String, require: true },
  description: { type: String, require: true },
  status: { type: String, require: true }
});

const BookModel = mongoose.model('book-collection', bookSchema);

module.exports = BookModel;
