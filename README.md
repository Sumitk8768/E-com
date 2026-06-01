# E-Commerce Product API

A RESTful API for managing products in an e-commerce platform. Built using Node.js, Express.js, MongoDB, and Mongoose.

## Features

* Create Product
* Get All Products
* Get Product By ID
* Update Product
* Delete Product
* MongoDB Database Integration
* Input Validation
* Error Handling Middleware
* JWT Authentication (Protected Routes)
* Multiple Image Upload Support using Multer
* Product Filtering by Category

## Tech Stack

* Node.js
* Express.js
* MongoDB
* Mongoose
* JWT Authentication
* Multer
* Express Validator

## Project Structure

```text
src/
├── config/
├── controllers/
├── middleware/
├── models/
├── routes/
├── validators/
├── uploads/
└── app.js

server.js
.env
```

## Installation

1. Clone the repository

```bash
git clone <repository-url>
```

2. Install dependencies

```bash
npm install
```

3. Create a `.env` file

```env
PORT=5000
MONGODB_URI=your_mongodb_connection_string
JWT_SECRET=your_secret_key
```

4. Start the development server

```bash
npm run dev
```

## API Endpoints

### Public Routes

| Method | Endpoint      | Description       |
| ------ | ------------- | ----------------- |
| GET    | /products     | Get all products  |
| GET    | /products/:id | Get product by ID |

### Protected Routes

| Method | Endpoint      | Description    |
| ------ | ------------- | -------------- |
| POST   | /products     | Create product |
| PUT    | /products/:id | Update product |
| DELETE | /products/:id | Delete product |

## Product Schema

```json
{
  "name": "string",
  "description": "string",
  "price": 1000,
  "category": "string",
  "images": ["image1.jpg", "image2.jpg"]
}
```

## Future Improvements

* Pagination
* Search Products
* Sorting
* Swagger Documentation
* Soft Delete
* Cloud Image Storage

## Author

Developed as part of a Backend API Assessment Project.
