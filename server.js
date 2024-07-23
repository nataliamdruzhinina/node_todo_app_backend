const express = require('express')
const app = express()
const mongoose = require('mongoose')
const routes = require('./ToDoRoutes')
const cors = require('cors')

require('dotenv').config()

mongoose.set("strictQuery", false)


const PORT = 4000 || process.env.PORT
app.use(express.json())
app.use(cors())

mongoose
.connect(process.env.MONGODB_LINK)


app.use(routes)
app.listen(PORT, ()=> {
})