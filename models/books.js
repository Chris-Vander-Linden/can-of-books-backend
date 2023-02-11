'use strict';

const mongoose = require('mongoose');

const bookSchema = new mongoose.Schema({
  title: { type: String },
  description: { type: String },
  status: { type: String }
});

const BookModel = mongoose.model('book-collection', bookSchema);

module.exports = BookModel;
