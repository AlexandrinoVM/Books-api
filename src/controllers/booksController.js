const getBooks =('/books',(req,res)=>{
    const {name,author,launch } = req.params.body  
    res.json({message: 'List of itens'})
})


const postBooks =('/books',(req,res)=>{
    
}) 