const express = require("express")
const Router = express.Router()
const Pet = require('../models/Pet')
const Controllers = require('../Controllers/Pet')



//Post Pet
Router.post("/post",Controllers.postPet)

//Get all Pets
Router.get('/',async(req,res)=>{
    try {
        const result = await Pet.find()
        res.status(200).send({response:result ,msg:"get Pets Success"})
    } catch (error) {
        res.status(500).send({msg:"can not get Pets"})
    }
})

//Get One By ID
Router.get('/:id',async(req,res)=>{
    try {
        const result = await Pet.findOne({_id:req.params.id})
        res.status(200).send({response:result ,msg:"get Pet by Id Success"})
    } catch (error) {
        res.status(500).send({msg:"can not get Pet check Pet ID"})
    }
})

//Delete By ID 
Router.delete("/:id",async(req,res)=>{
    try {
        const result = await Pet.deleteOne({_id:req.params.id})
        result ?
        res.status(200).send({msg:"Pet Deleted"})
        :res.status(400).send("there is no Pet With this ID ")
    } catch (error) {
        res.status(500).send({msg:"Error can not delete Pet"})
    }
})

// Update Pet By ID

Router.put("/:id",async(req,res)=>{
    try {
        const result = await Pet.updateOne({_id:req.params.id},{$set:{...req.body}})
        result ?
        res.status(200).send({msg:"Pet Updated"})
        :res.status(400).send("there is no Pet With this ID ")
    } catch (error) {
        res.status(500).send({msg:"Error can not Update Pet"})
    }
})


module.exports =  Router