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

//app.post('/searches', createSearch);

app.get('*', (request, response) => response.status(404).send('This route does not exist'));

app.listen (PORT, () => console.log(`Listening on ${PORT}`));


//Helper Functions

function newSearch(request, response) {
  response.render('pages/index');
}
