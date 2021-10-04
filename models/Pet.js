const mongoose = require('mongoose')

const {Schema, model} = mongoose

const petSchema = new Schema({ 
    name: {type:String, required:true},
    url: {type:String, required:true},
    location: {type:String},
    sexe: {type:String},
    age: {type:String},
    specie: {type:String},
    description: {type:String}
});

module.exports= Pet = model("pet",petSchema)