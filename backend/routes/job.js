const express = require('express');
const Job = require('../models/Job');
const router = express.Router();
const {isAuthor} = require('../middleware/isAuthor')
const catchAsync = require('express-async-handler');


router.post('/',catchAsync(isAuthor),async (req,res)=>{
    const {title,company,salary,experience,type,description,workplace,category} = req.body;
    const job = await Job.create({title,company,salary,experience,type,description,workplace,category});
    res.status(201).json(job);
})


module.exports = router;