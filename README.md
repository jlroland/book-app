# Booklist Builder

**Collaborators**: Jessica Roland & Tim Schoen
* with special thanks to David Chambers for help debugging

## Overview
This application allows the user to search the Google Books API by title or author,
rendering the top 10 search results. The app also gives the user the ability to add books to the collection, modify details for collected books, and remove books from the collection.  The Book Collection page displays all books currently stored in the collection and each book has the option to view the book details.  The Search Books page displays a form that, when submitted, shows search results for the values entered.  When a book on this page is selected, a form is provided to allow editing of book details as well as the addition of a "bookshelf" label.

## Structure

To build this app on their own, a user must set up their front-end files (.ejs, .js, .css) to display content and set up their server.js file to run back-end processes. Using Node.js, the user should install (and require in their server file) Express, EJS, Postgres, SuperAgent, dotenv and method-override since these are dependencies for their server file. The user should specify (in their server file) a port and use the middleware functions express.static and express.urlencoded; this will facilitate communication between front-end and back-end. They should set EJS as their view engine in the server file to allow rendering of .ejs files. There should also be a connection to Postgres (which will include a DATABASE_URL) to allow SQL queries when needed.

We are using HTML, CSS, Javascript and jQuery for front-end development. We are using Node.js, Express, EJS, SuperAgent and PostgreSQL for back-end development.

## For Further Development

This application was initially structured to fit within a short timespan and is currently at MVP stage.  With additional time, the following ideas could be implemented.

* Login capabilities to allow users to build personalized collections.

* Show books as flip-cards to reduce navigation time.
