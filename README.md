# Library Management API

A RESTful API for managing library books, built with **Node.js**, **Express**, and **MySQL**. This project provides CRUD operations (Create, Read, Update, Delete) and includes **Swagger documentation** for easy API exploration.

---

## Features

- ✅ List all books  
- ✅ Retrieve a single book by ID  
- ✅ Add a new book  
- ✅ Update an existing book  
- ✅ Delete a book  
- ✅ API documentation using **Swagger**

---

## Technologies Used

- **Node.js** – JavaScript runtime  
- **Express.js** – Web framework  
- **MySQL** – Relational database  
- **Swagger** – API documentation  
- **Body-parser** – Parse incoming request bodies  

---

## Getting Started

### Prerequisites

- Node.js installed ([Download Node.js](https://nodejs.org/))  
- MySQL installed and running ([Download MySQL](https://dev.mysql.com/downloads/))  

---

### Installation

1. Clone the repository:

```bash
git clone https://github.com/yourusername/library-management-api.git
cd library-management-api


## Folder Structure

 ├── controllers/
 │   └── bookController.js    # Business logic for books
 ├── routes/
 │   └── bookRoutes.js        # API routes for books
 ├── db.js                    # MySQL connection
 ├── index.js                 # Main server file
 ├── package.json             # Node.js dependencies
