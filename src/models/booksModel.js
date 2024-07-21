const pool = require('../db')

const getBooks = async () =>{
    const data = await pool.query('select * from books')
    return data.rows
}

const getBooksByid = async (id) =>{
    const data = await pool.query('select * from books where id=$1',[id])
    return data.rows[0]
}

const createeBook = async (name,author,description,page_numeber,category) => {
    const data = await pool.query('insert into books(name,author,description,pageNumber,category) values ($1,$2,$3,$4,$5) returning *',[name,author,description,page_numeber,category])
    return data.rows[0];
}

const updateBook = async (id,name,author,description,page_numeber,category) =>{
    const data = await pool.query('update books set name=$2  set author=$3  set description=$4 set page_number=$5 set category=$6 where id=$1 returning *',[id,name,author,description,page_numeber,category])
    return data.rows[0]
}

const deleteBook = async (id) =>{
    const data = await pool.query('delete from books where id=$1',[id])
    
}

module.exports = {
    getBooks,
    createeBook,
    updateBook,
    deleteBook,
    getBooksByid
}