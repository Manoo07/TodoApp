const express = require('express');
const app = express();
const bodyparser = require('body-parser');
const { createTodo,updateTodo } = require('./types');
const { todo } = require('node:test');
app.use(express.json());
const PORT = 3005;
// inputs to be expected 
/* 
    title: String,
    description: String
*/

app.post("/todo",async (req,res)=>{
    const createPayload = req.body;
    const parsedPayload = createTodo.safeParse(createPayload);
    if(!parsedPayload.success){
        res.status(411).json({
            msg:"You send the wrong inputs"
        })
        return;
    }
    // put in monogDB
    await todo.create({
        title: createPayload.title,
        description: createPayload.description,
        completed: false
    })
    res.status(200).json({
        msg:"Todo created sucessfully"
    })

})
app.get('/todos',async(req,res)=>{
    const response = await todo.find({});
    res.status(200).json({
        msg:"Sucessfully fetched todo data",
        response: response
    })
})
app.put('/completed',async (req,res)=>{
    const updatedPayload = req.body;
    const parsedPayload = updateTodo.safeParse(updateTodo);
    if(!parsedPayload.success){
        res.status(411).json({
            msg:"You have send wrong inputs"
        })
        return;
    }
    // update in mongoDB
    await todo.update({
        _id:req.body.id
    },{
        completed:true
    })
    res.status(200).json({
        msg:"Updated sucessfully"
    })
})


app.listen(PORT,()=>{
    console.log("App is listining at PORT :",PORT);
})