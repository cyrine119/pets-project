const jwt = require('jsonwebtoken')
const User = require('../models/User')
require('dotenv').config({path:'./config/.env'})

const isAdmin = async(req,res,next)=>{
    try {
        
        const token = req.headers['x-auth-token']
        if(!token){
            return res.status(400).send({msg:'unauthorized you dont have token'})
        }
        const decoded = await jwt.verify(token,process.env.secretOrKey)
        
        // if role is user or admin 
        const user = await User.findById(decoded.id)
        if(user.role === 0){
            return res.status(400).send({msg:'You are not admin'})
        }
        // get user role
        req.user = user.role
        next()
    } catch (error) {
        return res.status(400).send({msg:'Token is not valid'})
    }
}

module.exports = isAdmin