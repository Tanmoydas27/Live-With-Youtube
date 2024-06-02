const mongoose = require('mongoose');

mongoose.connect(process.env.mongodbURL);
const database = mongoose.connection;

database.on('connected',()=>{
    console.log("Database connection Successfully");
});

database.on('error',(err)=>{
    console.log("Database Connection Failed");
});

module.exports = database;