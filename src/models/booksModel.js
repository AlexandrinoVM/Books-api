const pool = require('../db')

const getBooks = async () => {
    try {
        const data = await pool.query('SELECT * FROM books');
        return data.rows; 
    } catch (error) {
        console.error('Erro ao buscar livros:', error);
        throw error;
    }
};

const  getBooksByid = async (id) => {
    try {
        const data = await pool.query('SELECT * FROM books WHERE id = $1', [id]);
        return data.rows[0];  
    } catch (error) {
        console.error('Erro ao buscar livro por ID:', error);
        throw error;
    }
};

const createeBook = async (name, author, description, page_number, category) => {
    try {
        const data = await pool.query(
            'INSERT INTO books(name, author, description, page_number, category) VALUES ($1, $2, $3, $4, $5)',
            [name, author, description, page_number, category]
        );
    } catch (error) {
        console.error('Erro ao criar livro:', error);
        throw error;
    }
};

const updateBook = async (id,name,author,description,page_numeber,category) =>{
    const data = await pool.query('update books set name=$2,author=$3 ,description=$4,page_number=$5,category=$6 where id=$1 returning *',[id,name,author,description,page_numeber,category])
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