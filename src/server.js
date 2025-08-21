const express = require('express');
const app = express();
const dotenv= require('dotenv').config();
const morgan = require('morgan');
const helmet = require('helmet');
const cors = require('cors');
const cookieParser = require('cookie-parser');
const notFound = require('./middlewares/notFound');

// Pars data json
app.use(express.json());
app.use(cookieParser())


// Middleware 
app.use(morgan('dev'));
app.use(helmet());
app.use(cors());




app.get('/',(req, res)=>{
    res.status(200).json({message:"start server code-negar " ,statuscode:200})
})

// not found route middleware
app.use(notFound)



// server listening
const port = process.env.PORT || 3000;
app.listen(port,()=>{
    console.log(`Server is running on port ${port}`);
}).on('error',(err)=>{
    console.error('Error Staring server;',err)
})
