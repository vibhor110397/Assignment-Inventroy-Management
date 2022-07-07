const express = require('express');
const mongoose = require('mongoose')
const AppError = require('./utils/appError')
const globalErrorHandler = require('./controllers/errorController')

const dotenv = require('dotenv');
dotenv.config('.env')

const config = require('./config/config')
const app = express();

app.use(express.json())
app.use(express.urlencoded({extended:true}))
//const userRoutes = require('./routes/api/index')



const db = config.db.url.replace('<password>',config.db.pass)

mongoose.connect(db).then(() =>{
    // console.log(con.connections);
    console.log("DB CONNECTED")
  })


app.use('/api',require('./routes/api/index'))

app.all("*",(req,res,next)=>{
    next(new AppError(`Can't find the ${req.originalUrl} on this server`))
  })
  
app.use(globalErrorHandler)
app.listen(8000,()=>{
    console.log("server is listening on port 8000");
})
