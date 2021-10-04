const Pet = require('../models/Pet')

exports.postPet = async (req,res)=>{
    try {
        //create a new Pet with the model Pet
        const newPet = new Pet(req.body)
        //test 1 if pet has an url
        if(!req.body.url){
            res.status(400).send({msg:"url is required"})
            return
        }
        //test 2 if the url already exist
        const pet = await Pet.findOne({url:req.body.url})
        if(pet){
            res.status(400).send({msg:"Url already exist"})
            return
        }
        // save the Pet
        const response = await newPet.save()
        res.send({response:response,msg:"Pet saved"})

    } catch (error) {
        console.log(error)
        res.status(500).send({msg:"can not save Pet"})
    }
}

