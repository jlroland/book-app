'use strict';

const express = require('express');
const superagent = require('superagent');

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.static('./public'));
app.use(express.urlencoded({extended: true}));

app.set('view engine', 'ejs');

app.get('/', newSearch);
//app.get('/hello', newSearch);     for testing purposes
app.post('/searches', createSearch);

app.get('*', (request, response) => response.status(404).send('This route does not exist'));

app.listen (PORT, () => console.log(`Listening on ${PORT}`));



//Helper Functions

// Book Constructor
function Book (info){
  const placeHolderImage = ' https://i.imgur.com/J5LVHEL.jpg';
  this.title= info.volumeInfo.title ? info.volumeInfo.title : 'No Title Found';
  this.author= info.volumeInfo.authors ? info.volumeInfo.authors: 'No Author Found';
  this.image= info.volumeInfo.imageLinks.thumbnail ? info.volumeInfo.imageLinks.thumbnail : placeHolderImage;
  this.description= info.volumeInfo.description ? info.volumeInfo.description : 'No Description Found';
  // console.log('33:',this);
}

function newSearch(request, response) {
  response.render('pages/index');
}
function createSearch(request, response){
  let booksArr=[];
  let url = 'https://www.googleapis.com/books/v1/volumes?q=';
  if (request.body.search[1]==='title'){url += `+intitle:${request.body.search[0]}`;}
  if (request.body.search[1]==='author'){url += `+inauthor:${request.body.search[0]}`;}
  return superagent.get(url)
    .then(apiResponse => {
      booksArr = apiResponse.body.items.map(bookResult =>{
        new Book(bookResult);
      })
      console.log('from Map:',booksArr)[1];
      return booksArr;
    })
    .then(resultsFromMap => {
      response.render('pages/searches/show', {resultsFromMap});
    });
}
