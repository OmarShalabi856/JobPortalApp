const express = require('express');
const User = require('../models/User');
const { generateToken } = require('../utils/authUtils/generateToken');
const {authenticateUserPassword} = require('../utils/authUtils/authenticateUserPassword')
const router = express.Router();
const ExpressError = require('../utils/errorUtils/expressError')
const catchAsync = require('express-async-handler')

router.post('/register', catchAsync(async (req,res,next)=>{
        const {firstName,lastName,email,password,fieldOfStudy,educationalInstitute} = req.body;
        const user = new User({firstName,lastName,email,password,fieldOfStudy,educationalInstitute})
        await User.init();
        await user.save();
        res.status(201).json({firstName,lastName,email,password,fieldOfStudy,educationalInstitute,token:generateToken(user._id)})  
}))

router.post('/login',catchAsync(async(req,res)=>{
        const {email,password} = req.body
        const user = await User.findOne({email})
        if(user && await authenticateUserPassword(password,user.password)){
            return res.json({
              _id:user.id,
              firstName:user.firstName,
              lastName:user.lastName,
              email:user.email,
              password:user.password,
              fieldOfStudy:user.fieldOfStudy,
              educationalInstitute:user.educationalInstitute,
              token:generateToken(user._id)
            })
        }
        

        throw new ExpressError("InvalidCredentials")
    
   
}))




module.exports = router;