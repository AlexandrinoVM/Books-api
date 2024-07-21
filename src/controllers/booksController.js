const booksMethods = require('../models/booksModel')

const getBooks = async(req,res) =>{
    try{
        const books = await booksMethods.getBooks()
        res.send(200).json(books)
    }
    catch (error){
        res.status(500).json({message: 'erro trying getting book'})
    }
}

const getBooksId = async(req,res) =>{
    try{
        const books = await booksMethods.getBooksByid(req.body.id)
        res.send(200).json(books)
    }
    catch (error){
        res.status(500).json({message: 'erro trying getting book'})
    }
}

const putBooks = async(req,res) =>{
    try{
        const books = await booksMethods.updateBook(req.body.id)
        res.send(200).json(books)
    }
    catch (error){
        res.sen.status(500).json({message: 'error trying to update the book'})
    }
}

const deleteBooks = async(req,res) =>{
    try{
        const books = await booksMethods.deleteBook(req.body.id);
        res.send(200).json(books)

    }catch (error){
        res.status(500).json({message: 'error trying delete book'})
    }
}

const postBooks = async(req,res) =>{
    try{
        const books = await booksMethods.createeBook();
        res.send(200).json(books)
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