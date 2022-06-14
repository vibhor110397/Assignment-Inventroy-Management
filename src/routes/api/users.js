const {Router} = require("express");
const res = require("express/lib/response");

const route = Router();

route.get('/',(req,res)=>{
    res.send("dekha beta")
})

module.exports = route;