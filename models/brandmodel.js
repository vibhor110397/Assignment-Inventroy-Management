//const mongoose = require("mongoose");
const { Schema, mongoose } = require('mongoose');



const brandSchema = new mongoose.Schema({
    Name:{
        type: String,
        required: 'True'
    },
    Status: {
        type: String,
        required: 'True'
    }
});

module.exports = mongoose.model('brand',brandSchema );