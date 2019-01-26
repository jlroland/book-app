# Book App

**Author**: Jessica Roland & Tim Schoen
**Version**: 1.3.1

## Overview
This app allows the user to search the Google Books API and renders the top 10 results. The app also gives the user the ability to maintain a collection of selected books (add, modify and delete).

## Getting Started

To build this app on their own, a user must set up their front-end files (.ejs, .js, .css) to display content and set up their server.js file to run back-end processes. Using Node.js, the user should install (and require in their server file) Express, EJS, Postgres, SuperAgent, dotenv and method-override since these are dependencies for their server file. The user should specify (in their server file) a port and use the middleware functions express.static and express.urlencoded; this will facilitate communication between front-end and back-end. They should set EJS as their view engine in the server file to allow rendering of .ejs files. There should also be a connection to Postgres (which will include a DATABASE_URL) to allow SQL queries when needed.

## Architecture

We are using HTML, CSS, Javascript and jQuery for front-end development. We are using Node.js, Express, EJS, SuperAgent and PostgreSQL for back-end development.

## Change Log

01-22-2019 9:52am - Application now has an express server with a functional GET route for the index page.

01-22-2019 12:11pm - Application now has an express server with a functional POST route for the search results page.

01-23-2019 11:54am - Application now has the ability to save books to the database.

01-24-2019 10:18am - Application will now redirect user to details page of newly-added book (retrieving & routing done, still building out page).

01-25-2019 7:08am - Application now has the ability to update book details and save changes to the database.

## Credits and Collaborations

David Chambers was instrumental in debugging at various stages of app development.

##Time Estimates

Number and name of feature: Functional Back-end

Estimate of time needed to complete: 45 minutes

Start time: 9:00am

Finish time: 9:50am

Actual time needed to complete: 50 minutes

Number and name of feature: Adding Google Books API

Estimate of time needed to complete: 1 hour

Start time: 9:55am

Finish time: 12:10pm

Actual time needed to complete: 2 hours 15 minutes

Number and name of feature: Save book to database

Estimate of time needed to complete: 1.5 hours

Start time: 8:50am

Finish time: 11:50am

Actual time needed to complete: 3 hours

Number and name of feature: Retrieve DB Info for Added Book & Redirect to Details Page

Estimate of time needed to complete: 1 hour

Start time: 9:00am

Finish time: 10:15am

Actual time needed to complete: 1 hour 15 minutes

Number and name of feature: Add Update Feature to Book Details

Estimate of time needed to complete: 1 hour

Start time: 12:15pm

Finish time: 1:30pm

Actual time needed to complete: 1.5 hours (includes 15 minutes of debugging on morning of 01-25-2019)

Number and name of feature: Add Delete Feature

Estimate of time needed to complete: 30 minutes

Start time: 2:25pm

Finish time: 2:50pm

Actual time needed to complete: 25 minutes