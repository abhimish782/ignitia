const mongoose = require("mongoose");

const AlertSchema = new mongoose.Schema({
    Title:{type:String , required:true},
    Link:{type:String , required:true},
    Date:{type:Date , required:true ,  default: Date.now}

}, { collection: 'Alerts' })

const model = mongoose.models.AlertSchema || mongoose.model('AlertSchema', AlertSchema ) 
module.exports = model;