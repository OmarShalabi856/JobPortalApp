const express = require('express');
const app = express();


require('./config/connectDb')();



const port = 3000 || process.env.PORT
app.listen(port,()=>{
    console.log("Server listening at port ",port);
});



