require('dotenv').config();

require('./config/connectDb')();

const express = require('express');
const generateErrorMessage = require('./utils/errorUtils/generateErrorMessage');
const app = express();


app.use(express.json())

app.use('/',require('./routes/user'))


app.use((err,req,res,next)=>{
    const {message,statusCode} = generateErrorMessage(err);
    res.status(statusCode).json({message})
})


const port = process.env.PORT
app.listen(port,()=>{
    console.log(`listening at port ${port}`)
});

