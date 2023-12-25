const { Product } = require("../models/Product.model")

const ProductController = {
    //getAll
    getAll: async (req, res) => {
        try {
            const products = await Product.find({})
            res.status(200).send(products)
        }
        catch (error) {
            res.status(404).send("an error occurted while getting products")
        }
    },
    //get by id
    getById: async (req, res) => {
        try {
            const { id } = req.params
            const target = await Product.findById(id)
            res.status(200).send(target)
        } catch (error) {
            res.status(404).send("an error occured while getting product by id")
        }
    },
    // add
    add: async (req, res) => {
        try {
            const { title, price, desc, image } = req.body
            const newProduct = new Product({ title, price, desc, image })
            await newProduct.save()
            res.status(201).send("new product created")
        }
        catch (error) {
            res.status(404).send("an error occured while posting data")
        }
    },
    // edit
    edit: async (req, res) => {
        try {
            const { id } = req.params
            const { title, price, desc, image } = req.body
            await Product.findByIdAndUpdate(id, { title, price, desc, image })
            res.status(203).send("item updated")
        } catch (error) {
            res.status(404).send("an error occured while editing product")
        }
    },
    //delete
    delete: async (req, res) => {
        try {
            const { id } = req.params
            await Product.findByIdAndDelete(id)
            res.send("item deleted")
        } catch (error) {
            res.status(404).send("an error occured while deleting data")
        }
    }

}
module.exports = { ProductController }