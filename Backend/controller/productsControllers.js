const Product = require("../models/Product")

const getAllProducts=async(req,res)=>{
    try {
        const products = await Product.find({})
        res.json(products)
    } catch (error) {
        console.error("error in getting Products");
        console.log(error);
        res.status(500).json({message:"server is not responding..."})
    }
}

const getOneProducts=async(req,res)=>{
    try {
        const product = await Product.findById(req.params.id)
        res.json(product)
    } catch (error) {
        console.error("error in getting Single Product");
        console.log(error);
    }
}

module.exports = {getAllProducts,getOneProducts}