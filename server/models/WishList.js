const mongoose = require("mongoose");
const UserModel = require("../models/UserModel");
const WishListSchema = new mongoose.Schema({
    userId:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"UserModel"
        
    },

    Tours:[
        {
            place:String,
            image:String,
            price:String,
        }
    ]

},{timestamps:true});

const wishList = mongoose.model("wishList",WishListSchema);

module.exports = wishList;