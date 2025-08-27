const BookRepository = require('../repositories/bookRepository');

class BookService {
  static async getAllBooks() {
    return await BookRepository.getAllBooks();
  }

  static async getBookById(id) {
    return await BookRepository.getBookById(id);
  }

  static async createBook(data) {
    const { title, author, published_year } = data;
    return await BookRepository.createBook(title, author, published_year);
  }

  static async updateBook(id, data) {
    const { title, author, published_year } = data;
    return await BookRepository.updateBook(id, title, author, published_year);
  }

  static async deleteBook(id) {
    return await BookRepository.deleteBook(id);
  }
}

module.exports = BookService;
