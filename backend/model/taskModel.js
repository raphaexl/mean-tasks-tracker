const mongoose =  require('mongoose')

const taskSchema = mongoose.Schema({
    text:{
        type: String,
        required: [true, 'Please add a text value']
    },
    day:{
        type: String,
        required: [true, 'Please add a day value']
    },
    reminder:{
        type: Boolean,
        default: false
    }
})

module.exports = mongoose.model('Task', taskSchema)