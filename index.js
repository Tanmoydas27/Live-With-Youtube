require('dotenv').config();

const express = require('express');
const session = require('express-session');
const path = require('path');
const cors = require('cors');
const dbConfig = require('./dbConfig/dbConfig.js');
const userRoute = require('./routes/userRoutes.js');
const app = express();
app.use(express.json());
app.use(express.static(path.resolve('./public')));

app.use(cors({
    origin: 'http://localhost:3000', // Allow requests from this origin,
    methods:"GET POST",
    credentials: true // Allow cookies to be sent with the request
  }));

app.use(session({
    resave:false,
    saveUninitialized: true,
    secret:'SECRET'
}));


app.use('/api/user',userRoute);


app.get('/',(req,res)=>{
    res.json('Server Activated ')
})


app.listen(3001, ()=>{
    console.log(`HTTP Server Running on PORT 3001`);
})