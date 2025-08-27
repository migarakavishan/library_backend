const db = require('../db');

class BookRepository {
  static getAllBooks() {
    return new Promise((resolve, reject) => {
      db.query("SELECT * FROM books", (err, results) => {
        if (err) reject(err);
        resolve(results);
      });
    });
  }

  static getBookById(id) {
    return new Promise((resolve, reject) => {
      db.query("SELECT * FROM books WHERE id = ?", [id], (err, result) => {
        if (err) reject(err);
        resolve(result[0]);
      });
    });
  }

  static createBook(title, author, published_year) {
    return new Promise((resolve, reject) => {
      db.query("INSERT INTO books (title, author, published_year) VALUES (?, ?, ?)",
        [title, author, published_year],
        (err, result) => {
          if (err) reject(err);
          resolve({ id: result.insertId, title, author, published_year });
        });
    });
  }

  static updateBook(id, title, author, published_year) {
    return new Promise((resolve, reject) => {
      db.query("UPDATE books SET title=?, author=?, published_year=? WHERE id=?",
        [title, author, published_year, id],
        (err) => {
          if (err) reject(err);
          resolve({ id, title, author, published_year });
        });
    });
  }

  static deleteBook(id) {
    return new Promise((resolve, reject) => {
      db.query("DELETE FROM books WHERE id=?", [id], (err) => {
        if (err) reject(err);
        resolve({ message: "Book deleted" });
      });
    });
  }
}

module.exports = BookRepository;
