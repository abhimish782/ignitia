const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema({
    username:{type:String , required:true},
    password:{type:String , required:true}
}, { collection: 'User' })

const model = mongoose.models.UserSchema || mongoose.model('UserSchema', UserSchema ) 
module.exports = model;