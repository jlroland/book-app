DROP TABLE IF EXISTS saved_books;

CREATE TABLE saved_books (
  isbn NUMERIC (13, 0) PRIMARY KEY,
  title VARCHAR(255),
  author VARCHAR(255),
  description TEXT,
  image_url VARCHAR(255),
  bookshelf VARCHAR(255)
);