const express = require("express")
require('dotenv').config()
const mongoose = require("mongoose")
const cors = require("cors")
const ProductRouter = require("./routes/Product.routes")
const app = express()
const PORT = process.env.PORT || 8080
app.use(express.json())
app.use(cors())
mongoose.connect("mongodb+srv://rashadkhll:rashad918@cluster0.vllij5v.mongodb.net/").then(res => {
    console.log("connected to db")
})
app.use("/products", ProductRouter)

app.listen(PORT, () => {
    console.log("app running on 8080")
})


