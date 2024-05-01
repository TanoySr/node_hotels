const mongoose = require('mongoose');
require('dotenv').config();

//const mongoURL = process.env.MONGODB_URI_Local;
const mongoURL = process.env.MONGODB_URI;

mongoose.connect(mongoURL);
const db = mongoose.connection;

db.on('connect',()=>{
    console.log('connected to MongoDB server');
});

db.on('error',(err)=>{
    console.error(' MongoDB server error:', err);
});

db.on('disconnected',(err)=>{
    console.log(' MongoDB server Disconnected');
});

module.exports = db;


