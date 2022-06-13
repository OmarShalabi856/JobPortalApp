const mongoose = require('mongoose')

const connectMongo = () => {
    mongoose.connect('mongodb://localhost/jobportal');
    const db = mongoose.connection;
    db.on('error',console.error.bind(console,'connection error: '))
    db.once('open',()=>{
        console.log('Datbase connected')
    })
}

module.exports = connectMongo;