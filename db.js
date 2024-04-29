const mongoose = require('mongoose');
const mongoURL = 'mongodb://localhost:27017/hotels';

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