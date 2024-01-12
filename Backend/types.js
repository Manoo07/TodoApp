const zod = require('zod');
/*
    to add todo
    {
        title:string,
        description : string
    }
    to update todo
    {
        id:string
    }
*/ 

const createTodo = zod.object({
    title: zod.string(),
    description: zod.string(),
})
const updateTodo = zod.object({
    id: zod.string()
})

module.exports = {
    createTodo,
    updateTodo
}