const jwt = require('jsonwebtoken')
const User = require('../models/User')
const ExpressError = require('../utils/ExpressError')



module.exports.isAuthor = async (req,res,next)=>{
    let token

    if(req.headers.authorization && req.headers.authorization.startsWith('Bearer')){
        try {
            token = req.headers.authorization.split(' ')[1]
            const decoded = jwt.verify(token,process.env.JWT_SECRET)
            req.user = await User.findById(decoded.id).select('-password')
            next();
        } catch (error) {
            throw new ExpressError('Not authorized')
        }
    }
}