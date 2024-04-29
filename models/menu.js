const mongoose = require('mongoose');

const menuData = new mongoose.Schema({
    name:{
        type: String,
        required:true
    },
    price:{
        type:Number,
        required:true
    },
    taste:{
        type:String,
        enum:['sweet','spicy','sour'],
        required:true
    },
    is_drink:{
        type:Boolean,
        default:false
    },
    indgredients:{
        type:[String],
        default:[]
    },
    num_sales:{
        type:Number,
        default:0
    }
});

const menu = mongoose.model('menu',menuData);
module.exports = menu;