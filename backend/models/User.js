const mongoose = require('mongoose');

const userSchema = mongoose.Schema({
    firstName:{
        type:String,
        required:[true,'First name cannot be blank']
    },
    lastName:{
        type:String,
        required:[true,'Last name cannot be blank']
    },
    email:{
        type:String,
        required:[true,'Email cannot be blank'],
        unique:true
    
    },
    password:{
        type:String,
        required:[true,'Password cannot be blank']
    },
    fieldOfStudy:{
        type:String,
        required:[true ,'Field of study cannot be blank']
    },
    educationalInstitute:{
        type:String,
        required:[true,'Educational Institute cannot be blank']
    }
})



module.exports = mongoose.model('User',userSchema)