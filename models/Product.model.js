const mongoose = require("mongoose")

const Product = mongoose.model(
    "Product",
    new mongoose.Schema({
        title: String,
        price: Number,
        desc: String,
        image: String
    }))

module.exports = { Product }