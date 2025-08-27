const BookService = require('../services/bookService');

class BookController {
  static async getAll(req, res) {
    try {
      const books = await BookService.getAllBooks();
      res.json(books);
    } catch (err) {
      res.status(500).json({ error: err.message });
    }
  }

  static async getById(req, res) {
    try {
      const book = await BookService.getBookById(req.params.id);
      res.json(book);
    } catch (err) {
      res.status(500).json({ error: err.message });
    }
  }

  static async create(req, res) {
    try {
      const newBook = await BookService.createBook(req.body);
      res.status(201).json(newBook);
    } catch (err) {
      res.status(500).json({ error: err.message });
    }
  }

  static async update(req, res) {
    try {
      const updatedBook = await BookService.updateBook(req.params.id, req.body);
      res.json(updatedBook);
    } catch (err) {
      res.status(500).json({ error: err.message });
    }
  }

  static async delete(req, res) {
    try {
      const result = await BookService.deleteBook(req.params.id);
      res.json(result);
    } catch (err) {
      res.status(500).json({ error: err.message });
    }
  }
}

module.exports = BookController;
