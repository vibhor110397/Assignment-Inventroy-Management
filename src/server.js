const { urlencoded } = require("express");
const express = require("express");
const {db} = require('./models')

const app = express();

// For POST Request using these middlewares
app.use(express.json());
app.use(urlencoded({extended:true}))

// For Routes
app.use('/api',require('./routes/api'))

db.sequelize.sync()
    .then(()=>{
        app.listen(8000,()=>{
            console.log("Server is running on port");
        })
    })
    .catch((err)=>{
        console.log(err);
    })
