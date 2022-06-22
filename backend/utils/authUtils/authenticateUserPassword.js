const bcrypt = require('bcryptjs');


module.exports.authenticateUserPassword = async (enteredPassword,realPassword)=>{
    return await bcrypt.compare(enteredPassword,realPassword);
}