DROP TABLE IF EXISTS saved_books;

CREATE TABLE saved_books (
  id SERIAL PRIMARY KEY,
  isbn NUMERIC (13, 0),
  title VARCHAR(255),
  author VARCHAR(255),
  description TEXT,
  image_url VARCHAR(255),
  bookshelf VARCHAR(255)
);