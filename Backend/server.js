require("dotenv").config()
const exprss = require('express')
const connectDB = require('./config/db')

connectDB()

const app = exprss()

const PORT = process.env.PORT || 5051

app.listen(PORT,()=>{`server runing at port number  ${PORT}`})