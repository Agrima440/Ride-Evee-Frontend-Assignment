// const express=require('express')
// const cors=require('cors')
// const morgan =require('morgan')
// const dotenv=require('dotenv')
// const colors=require('colors')
// const connectDb = require('./config/connectDb')


// dotenv.config()

// connectDb()

// const app=express()

// app.use(morgan('dev'))
// app.use(express.json())
// app.use(cors())


// app.get('/',(req,res)=>{
//   res.send("<h1>hello </h1>")
// })

// const PORT=8080 || process.env.PORT

// app.listen(PORT,()=>{
//   console.log(`Server running on port ${PORT}`)
// })

// server.js
const express = require('express');
const bodyParser = require('body-parser');
const dotenv=require('dotenv')

const connectDB = require('./utils/db');

// Routes
const customerRoutes = require('./routes/customerRoutes');

const app = express();

dotenv.config()


// Connect to MongoDB
connectDB();

// Middleware
app.use(bodyParser.json());


// Routes
app.use('/api/customers', customerRoutes);

const PORT=5000 || process.env.PORT


app.listen(PORT,()=>{
    console.log(`Server running on port ${PORT}`)
  })
