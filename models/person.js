const mongoose = require('mongoose');

const personSchema = new mongoose.Schema({
    name:{
        type: String,
        required:true
    },
    work:{
        type:String,
        enam:['chef','waiter','managar'],
        required:true
    },
    mobile:{
        type:String,
        required:true
    },
    email:{
        type:String,
        require:true,
        unique:true
    },
    address:{
        type:String
    },
    salary:{
        type:Number,
        required:true
    }
});

//create person model

const Person = mongoose.model('Person',personSchema);
module.exports = Person;