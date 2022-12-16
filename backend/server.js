const express = require('express')
const colors=  require('colors')
const { errorHandler } = require('./middleware/errorMiddleware')
const connectDB = require('./config/db')

const dotenv = require('dotenv').config()

const port = process.env.PORT || 3000

const app = express()

//Connect to the database
connectDB()
//Setting up middlewares
app.use(express.json())
app.use(express.urlencoded({extended:false}))

app.use('/api/tasks', require('./routes/taskRoutes'))
app.use(errorHandler)
app.listen(port, () => {
    console.log(`Server running on port ${port}`)
})