const mongoose = require('mongoose');
require('dotenv').config();

//const mongoURL = 'mongodb://localhost:27017/hotels';
//const mongoURL = 'mongodb+srv://tanoydadu:tanoy905509@cluster0.whyw08j.mongodb.net/'

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

