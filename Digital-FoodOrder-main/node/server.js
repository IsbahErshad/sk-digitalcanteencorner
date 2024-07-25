const cors=require('cors')
const express = require('express')
const booking = require('./booking')
const app = express()
app.use(express.json())
app.use(cors())
const port = 3300

app.listen( port, ()=>{
    console.log(`server running at ${port}`);
})

//connection to mongo DB
const mongoose=require('mongoose')
const DB='mongodb+srv://isbah:Ac1oMonDB@cluster0.vlq1aqo.mongodb.net/'
mongoose.connect(DB,{
    useNewUrlParser:true,
}).then(()=>{
    console.log('Database connected...')
})

app.post('/roomRegister',async(req,res)=>{
    const book=new Booking(req.body)
    try{
        await book.save()
        res.status(201).json({
            status:'Sucess',
            headers:{
                'Authorization':'',
                'Content-Type':'',
            },
            data:{
                Book
            }
        })
    }catch(err){
        res.status(500).json ({
            status:'Failed',
            message: err

    })
}
})