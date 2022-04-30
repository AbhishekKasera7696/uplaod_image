const mongoose = require('mongoose');

const user = new mongoose.Schema({
    "id":{type:Number,required:true},
    "firstName": { type: String, required: true },
    "lastName": { type: String },
    "email": { type: String, required: true }
})

module.exports = mongoose.model('user',user);