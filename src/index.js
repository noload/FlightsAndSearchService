const express = require('express');
const bodyParser = require('body-parser');
const {PORT} = require('./config/serverConfig')
const  ApiRoute = require('./routes/index');

const setupAndStartServer = async ()=>{

    // create express object
    const app = express();

    // middleware
    app.use(bodyParser.json());
    app.use(bodyParser.urlencoded({extended:true}));
    app.use('/api',ApiRoute);
   
   
    app.listen(PORT,async ()=>{
        console.log(`Server started at ${PORT}`);

    


       
    })
    
}
setupAndStartServer();