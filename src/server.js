const express = require('express');
const app = express();
const dotenv= require('dotenv')
const morgan = require('morgan');
const helmet = require('helmet');
const cors = require('cors');
const cookieParser = require('cookie-parser');
const notFound = require('./middlewares/notFound');
const connectToDB = require('./config/db')  

dotenv.config()


// Pars data json
app.use(express.json());
app.use(cookieParser())
app.use(express.urlencoded({extended:true}))


// Middleware 
app.use(morgan('dev'));
app.use(helmet());
app.use(cors());

// connect to mongoDB
connectToDB()


// auth/users routers
const usersRoutes = require('./routes/usersRoutes');
app.use('/api/auth/',usersRoutes)


// not found route middleware
app.use(notFound)



// server listening
const port = process.env.PORT 
app.listen(port,()=>{
    console.log(`Server is running on port ${port}`);
}).on('error',(err)=>{
    console.error('Error Staring server;',err)
})
