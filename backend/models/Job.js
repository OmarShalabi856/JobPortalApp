const mongoose = require('mongoose');

const jobSchema = mongoose.Schema({
    title:{
        type:String,
        required:[true,'Title cannot be blank']
    },
    company:{
        type:String,
        required:[true,'Company cannot be blank']
    },
    salary:{
        type:Number,
        required:[true,'Salary cannot be blank']
    },
    experience:{
        type:String,
        enum:['Senior','Junior','Internship'],
        required:[true,'Experience cannot be blank']
    },
    type:{
        type:String,
        enum:['Full-time','Part-time','Contract'],
        required:[true,'Type cannot be blank']
    },
    description:{
        type:String,
        required:[true,'Description cannot be blank']
    },
    workplace:{
        type:String,
        enum:['Remote','On-site','Hybrid'],
        required:[true,'Workplace cannot be blank']
    }

})


module.exports = mongoose.model('Job',jobSchema)