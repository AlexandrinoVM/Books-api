const booksMethods = require('../models/booksModel')

const getBooks = async (req, res) => {
    try {
        const books = await  booksMethods.getBooks();
        res.status(200).json(books);
    } catch (error) {
        console.error('Erro ao buscar livros:', error);
        res.status(500).json({ message: 'error to find the book' });
    }
};

const getBooksId = async (req, res) => {
    try {
        const { id } = req.params;
        const book = await  booksMethods.getBooksByid(id);
        if (!book) {
            return res.status(404).json({ message: 'book not found' });
        }
        res.status(200).json(book);
    } catch (error) {
        console.error('Error trying find book by id:', error);
        res.status(500).json({ message: 'error book not find' });
    }
};

const putBooks = async(req,res) =>{
    try{
        const {name,author,description,page_number,category} =req.body
        const books = await booksMethods.updateBook(req.params.id,name,author,description,page_number,category)

        if (!books) {
            return res.status(404).json({ message: 'book not found' });
        }

        res.send(200).json(books)
    }
    catch (error){
        if (!res.headersSent) {
            return res.status(500).json({ message: 'Error trying to update the book' });
        }
    }
}

const deleteBooks = async(req,res) =>{
    
    try{
        const { id } = req.params;
        const book = await  booksMethods.deleteBook(id);
        res.send(200).json(book)

    }catch (error){
        res.status(500).json({message: 'error trying delete book'})
    }
}

const postBooks = async(req,res) =>{
    try{
        const {name, author, description, page_number, category} =req.body
        const books = await booksMethods.createeBook(name, author, description, page_number, category);
        res.send(201).json(books)
    }
    catch (error){
        res.status(500).json({message: 'error trying to create book'})
    }
} 

module.exports ={
    getBooks,
    putBooks,
    postBooks,
    getBooksId,
    deleteBooks
}