const express = require('express')
const router = express.Router()
const booksController = require('../controllers/booksController')

router.get('/books',booksController.getBooks)
router.get('/books/:id',booksController.getBooksId)
router.put('/books/:id',booksController.putBooks)
router.delete('/books/:id',booksController.deleteBooks)
router.post('/books',booksController.postBooks)


module.exports = router