// schema
/*
    Todo {
        title: String,
        description : String,
        completed: boolean
    }
    url: 
    mongodb+srv://manoharboinapalli2003:5SZc3JzzvqFAYj4Z@cluster0.itq0sbk.mongodb.net/todos
 */

const mongoose = require("mongoose");


mongoose.connect(`mongodb+srv://manoharboinapalli2003:5SZc3JzzvqFAYj4Z@cluster0.itq0sbk.mongodb.net/todos`);
const todoSchema =  mongoose.Schema({
    title: String,
    description : String,
    completed: Boolean
})

const todo = mongoose.model('todos',todoSchema);
module.exports = {
    todo
}