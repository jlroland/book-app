'use strict';

const express = require('express');
const superagent = require('superagent');
const pg = require('pg');

require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 3000;

const client = new pg.Client(process.env.DATABASE_URL);
client.connect();
client.on('err', err => console.log(err));

app.use(express.static('./public'));
app.use(express.urlencoded({extended: true}));

app.set('view engine', 'ejs');

app.get('/', displaySavedBooks);
//app.get('/hello', newSearch);     for testing purposes
app.get('/searches/new', newSearch);
app.post('/books:isbn', addBook);
app.post('/searches/new', createSearch);
app.get('/books/show', retrieveBooks);


app.get('*', (request, response) => response.status(404).send('This route does not exist'));

app.listen (PORT, () => console.log(`Listening on ${PORT}`));

function handleError(error, response) {
  response.render('pages/error', {error: 'The request could not be processed'});
}

//Helper Functions

// Book Constructor
function Book (info){
  const placeHolderImage = ' https://i.imgur.com/J5LVHEL.jpg';
  this.title = info.title ? info.title : 'No Title Found';
  this.author = info.authors ? info.authors: 'No Author Found';
  this.image = info.imageLinks.thumbnail ? info.imageLinks.thumbnail : placeHolderImage;
  this.description = info.description ? info.description : 'No Description Found';
  this.isbn = info.industryIdentifiers[0].identifier ? info.industryIdentifiers[0].identifier : 'No ISBN found';
  this.bookshelf = '';
}

function newSearch(request, response) {
  response.render('pages/searches/new');
}



function createSearch(request, response){
  let booksArr = [];
  let url = 'https://www.googleapis.com/books/v1/volumes?q=';
  if (request.body.search[1] === 'title'){url += `+intitle:${request.body.search[0]}`;}
  if (request.body.search[1] === 'author'){url += `+inauthor:${request.body.search[0]}`;}
  return superagent.get(url)
    .then(apiResponse => {
      apiResponse.body.items.map(bookResult =>{
        booksArr.push(new Book(bookResult.volumeInfo));
      })
      return booksArr;
    })
    .then( booksArr => {
      response.render('pages/searches/show', {booksArr:booksArr});
    })
    .catch(error => handleError(error, response));
}

function displaySavedBooks (request, response) {
  response.render('pages/index');
}

function addBook(request, response) {
  let {isbn, title, author, description, image_url, bookshelf} = request.body;
  console.log(request.body);
  let SQL = `INSERT INTO saved_books(isbn, title, author, description, image_url, bookshelf) VALUES($1, $2, $3, $4, $5, $6);`;
  let values = [isbn, title, author, description, image_url, bookshelf];

  return client.query(SQL, values)
    .then()
    .then(response.redirect('pages/books/show'))
    .catch(error => handleError(error, response));
}
function retrieveBooks(request, response){
  let sql = 'select * from saved_books'
}