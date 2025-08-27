const express = require('express');
const bodyParser = require('body-parser');
const swaggerUi = require('swagger-ui-express');
const swaggerJsdoc = require('swagger-jsdoc');
const bookRoutes = require('./routes/bookRoutes');

const app = express();
app.use(bodyParser.json());

// 📌 Swagger Config
const swaggerOptions = {
  definition: {
    openapi: '3.0.0',
    info: {
      title: "Library Management API",
      version: "1.0.0",
      description: "CRUD API for managing library books"
    },
    servers: [{ url: "http://localhost:3000" }],
  },
  apis: ['./routes/*.js'],
};

const swaggerDocs = swaggerJsdoc(swaggerOptions);
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocs));

// 📌 Routes
app.use('/api/books', bookRoutes);

// Start server
app.listen(3000, () => console.log("🚀 Server running on http://localhost:3000/api-docs"));
