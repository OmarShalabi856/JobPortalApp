const errors = require('../../constants/errors')

const errorMessage = (message,statusCode)=>{
    return {message,statusCode}
}

const generateErrorMessage = (error)=>{
    if(error.code){
        switch(error.code){
            case 11000:
                return errorMessage(errors.EMAIL_DUPLICATE.message, errors.EMAIL_DUPLICATE.statusCode)
            default:
                return errorMessage(errors.DEFAULT.message,errors.DEFAULT.statusCode)
        }
    }

    else if(error.name){
        switch(error.name){
            case "ValidationError":
                return errorMessage(error.message.split(':')[2],400)
            case "InvalidCredentials":
                return errorMessage(errors.INVALID_CREDENTIALS.message,errors.INVALID_CREDENTIALS.statusCode);
            default:
                return errorMessage(errors.DEFAULT.message,errors.DEFAULT.statusCode)
        }
    }

    
    return {}
    
   
}

module.exports = generateErrorMessage;