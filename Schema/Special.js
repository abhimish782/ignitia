const mongoose = require("mongoose");

const SpecialSchema = new mongoose.Schema({
    Title:{type:String , required:true},
    FormLink:{type:String , required:true},
    FrameLink:{type:String , required:true}

}, { collection: 'Special' })

const model = mongoose.models.SpecialSchema || mongoose.model('SpecialSchema', SpecialSchema ) 
module.exports = model;