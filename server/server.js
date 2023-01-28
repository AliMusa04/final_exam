const express =require('express')
const cors = require('cors')
const mongoose = require('mongoose')


const app = express()
const PORT = 8080


mongoose.set('strictQuery',false)



mongoose.connect("mongodb+srv://AliMusa04:sGSZqg0CxSPG6y2z@cluster0.tfsnsqn.mongodb.net/?retryWrites=true&w=majority").then(()=>{
    console.log("created database");
})

const problemSchema = mongoose.Schema({
    name: String,
    desc: String,
    price: Number
})

app.use(express.json())
app.use(cors())

const problemModel = mongoose.model('problem',problemSchema)


app.get("/api/problem",(req,res)=>{
    console.log(req);
    problemModel.find({},(err,data)=>{

        if(err) return res.status(500).send({err})

        res.send(data)
    })

})

app.post('/api/problem',(req,res)=>{
    let newProblem = new problemModel({
        ...req.body
    })
    newProblem.save()

    res.status(200).send({message: "created succsefully",newProblem})
})


app.get("/api/problem/:id",(req,res)=>{
    problemModel.findOne({_id: req.params.id},(err,data)=>{
        if(err) return res.status(500).send({err})

        res.send(data)

    })
})


app.delete('/api/problem/:id',(req,res)=>{
    problemModel.findByIdAndDelete({_id:req.params.id},(err,data)=>{
        if(err) return res.status(500).send({err})
res.send(data)
    })
})


app.listen(PORT)

