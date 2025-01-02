const axios = require('axios');

// Function to fetch books from Google Books API
const fetchBooks = async (req, res) => {
    const { query } = req.query;

    if (!query) {
        return res.status(400).json({ error: 'Query parameter is required' });
    }

    try {
        const response = await axios.get('https://www.googleapis.com/books/v1/volumes', {
            params: {
                q: query,
                maxResults: 10, // Limit to 10 books
                key: process.env.GOOGLE_BOOKS_API_KEY // API key from .env
            }
        });

        const books = response.data.items.map((book) => ({
            id: book.id,
            title: book.volumeInfo.title,
            authors: book.volumeInfo.authors || ['Unknown'],
            publishedDate: book.volumeInfo.publishedDate || 'Unknown',
            description: book.volumeInfo.description || 'No description available',
            imageUrl: book.volumeInfo.imageLinks?.thumbnail || ''
        }));

        res.json(books);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Failed to fetch books' });
    }
};

module.exports = { fetchBooks };
