const express = require('express');
const app = express();
const dotenv= require('dotenv').config();




app.get('/',(req, res)=>{
    res.send('start server code-negar ')
})




// server listening
const port = process.env.PORT || 3000;
app.listen(port,()=>{
    console.log(`Server is running on port ${port}`);
}).on('error',(err)=>{
    console.error('Error Staring server;',err)
})
