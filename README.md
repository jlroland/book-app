# Booklist Builder

**Collaborators**: Jessica Roland & Tim Schoen
* with special thanks to David Chambers for help debugging

To visit the website, click [here](https://ts-jr-booklist.herokuapp.com/).

## Overview
This application allows the user to search the Google Books API by title or author,
rendering the top 10 search results. The app also gives the user the ability to add books to the collection, modify details for collected books, and remove books from the collection.  The Book Collection page displays all books currently stored in the collection and each book has the option to view the book details.  The Search Books page displays a form that, when submitted, shows search results for the values entered.  When a book on this page is selected, a form is provided to allow editing of book details as well as the addition of a "bookshelf" label.

## Structure

The front-end was developed using HTML, CSS, JavaScript, jQuery and EJS.  The back-end was built using Node.js and Express.  Superagent is used to handle API requests and PostgreSQL is used to store data.  Other dependencies include method-override and dotenv.  The application has been deployed on Heroku with a Postgres add-on.

## For Further Development

This application was initially structured to fit within a short development timespan and is currently at MVP stage.  With additional time, the following ideas could be implemented.

* Login capabilities to allow users to build personalized collections.

* Show books as flip-cards to reduce navigation time.

* Issue a warning and require confirmation when deleting a book from a collection.
