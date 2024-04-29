const mongoose = require('mongoose');

const table_place_Schema = new mongoose.Schema({
    place:{
        type: String,
        required:true
    },
    shit:{
        type:String,
        enam:['2_shit','4_shit','6_shit'],
        required:true
    },
    typeOfshit:{
        type:String,
        enam:['wooden', 'sponce', 'conkrit'], 
        required:true
    },
    price:{
        type:Number,
        default:0
    }
});



const table_place  = mongoose.model('table_place',table_place_Schema);
module.exports = table_place;