const axios = require('axios');
require('dotenv').config();

const searchBooks = (req, res) => {

  axios.get(`https://www.googleapis.com/books/v1/volumes?q=intitle:${req.query.search}&inauthor:${req.query.search}&keyes&key=${process.env.GOOGLEKEY}`).then(data => {
    const dataToSend = data.data.items.map(book => new SearchedBooks(book));
    res.status(200).send(dataToSend);
  }).catch(error => console.error(error));
};

class SearchedBooks {
  constructor (book) {
    this.title = book.volumeInfo.title;
    this.author = book.volumeInfo.authors;
    this.publishedDate = book.volumeInfo.publishedDate;
    this.description = book.volumeInfo.description;
    this.image = book.volumeInfo.imageLinks?.thumbnail;
    this.googleBookID = book.id;
  }
}

module.exports = searchBooks;
