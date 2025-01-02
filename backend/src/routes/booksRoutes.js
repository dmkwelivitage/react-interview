const express = require('express');
const router = express.Router();
const { fetchBooks } = require('../services/googleBooks');

// Route for fetching books based on query
router.get('/', fetchBooks);

module.exports = router;
