//core modules : http

//import http from './'
const http = require('http')         //import module
const user = require('./user')       //import user
const express = require('express')
const app = express()
const port = 3500

app.get('/',function(req,res){
    res.send(user)
})
app.listen( port, ()=>{
    console.log(`server running at ${port}`);
})



