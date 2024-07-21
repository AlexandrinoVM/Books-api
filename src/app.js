const express = require('express')
const app = express()

const booksRoutes = require('./routes/booksRoutes')

app.use(express.json())

app.use('/api',booksRoutes);

module.exports = app