
const asyncHandler = require('express-async-handler')
const Task = require('../model/taskModel')

// @desc Get Task
// @route GET Tasks
// @access Private

const getTasks = asyncHandler(async (req, res) => {
    const tasks = await Task.find()
    res.status(200).json({tasks})
    //res.status(200).json({message: "Task Get"})
})

// @desc Get Task
// @route POST Tasks
// @access Private

const setTask = asyncHandler(async (req, res) => {
    if (!req.body.text){
        res.status(400)
        throw new Error('Please add a text field')
    }
    if (!req.body.day){
        res.status(400)
        throw new Error('Please add a day field')
    }
    const task = await Task.create({
        text: req.body.text,
        day: req.body.day,
        reminder: req.body.reminder
    })
    res.status(200).json(task);
   // res.status(200).json({message: "Task Set"})
})

// @desc Update Task
// @route PUT Tasks
// @access Private

const updateTask = asyncHandler(async (req, res) => {
    //res.status(200).json({message: "Task Update"})
    const task = await Task.findById(req.params.id)
    if (!task){
     res.status(400)
     throw new Error(' Task not Found')
    }
    const updatedTask =  await Task.findByIdAndUpdate(req.params.id, req.body, {new:true})
    res.status(200).json(updatedTask)
})

// @desc Delete Task
// @route  DELEE Tasks
// @access Private

const deleteTask = asyncHandler(async (req, res) => {
    //res.status(200).json({message: "Task Delete"})
    const task = await Task.findById(req.params.id)
    if (!task){
        throw new Error('Task not Found')
    }
    const removedTask = await Task.findByIdAndRemove(req.params.id, req.body)
    res.status(200).json({id: req.params.id})
})

module.exports = {
    getTasks,
    setTask,
    updateTask,
    deleteTask
}