const express = require('express');
const app = express()


const PORT = process.env.PORT || 3000

app.get('/',(req,res) =>{
    res.send('rota funcionando')
})


app.listen(PORT,()=>{
    console.log(`server running in port ${PORT}`);
})