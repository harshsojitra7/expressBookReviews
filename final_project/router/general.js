const express = require('express');
let books = require("./booksdb.js");
let isValid = require("./auth_users.js").isValid;
let users = require("./auth_users.js").users;
const public_users = express.Router();


public_users.post("/register", (req,res) => {
  //Write your code here
  return res.status(300).json({message: "Yet to be implemented"});
});

// Get the book list available in the shop
public_users.get('/',function (req, res) {
  //Write your code here
  return res.status(300).json({message: "Yet to be implemented"});
});

// Get book details based on ISBN
public_users.get('/isbn/:isbn',function (req, res) {
  //Write your code here
  return res.status(300).json({message: "Yet to be implemented"});
 });
  
// Get book details based on author
public_users.get('/author/:author',function (req, res) {
  //Write your code here
  return res.status(300).json({message: "Yet to be implemented"});
});

// Get all books based on title
public_users.get('/title/:title',function (req, res) {
  //Write your code here
  return res.status(300).json({message: "Yet to be implemented"});
});

//  Get book review
public_users.get('/review/:isbn',function (req, res) {
  //Write your code here
  return res.status(300).json({message: "Yet to be implemented"});
});

module.exports.general = public_users;

const axios = require('axios');

// Get all books using async/await
public_users.get('/async/books', async function (req, res) {
    try {
        const response = await axios.get('http://localhost:5000/');
        res.send(response.data);
    } catch (error) {
        res.status(500).send(error);
    }
});

// Get book by ISBN using Promise
public_users.get('/async/isbn/:isbn', function (req, res) {
    axios.get('http://localhost:5000/isbn/' + req.params.isbn)
        .then(response => res.send(response.data))
        .catch(error => res.status(500).send(error));
});

// Get books by author
public_users.get('/async/author/:author', function (req, res) {
    axios.get('http://localhost:5000/author/' + req.params.author)
        .then(response => res.send(response.data))
        .catch(error => res.status(500).send(error));
});

// Get books by title
public_users.get('/async/title/:title', function (req, res) {
    axios.get('http://localhost:5000/title/' + req.params.title)
        .then(response => res.send(response.data))
        .catch(error => res.status(500).send(error));
});
