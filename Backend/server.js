require("dotenv").config()
const express = require('express')
const connectDB = require('./config/db')
const productsRoute = require("./routes/productsRoute")

connectDB()

const app = express()

app.use(express.json())

app.use("/api/products",productsRoute)

const PORT = process.env.PORT || 5051

app.listen(PORT,()=>{`server runing at port number  ${PORT}`})