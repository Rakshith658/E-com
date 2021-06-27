const express = require("express")
const router = express.Router()
const {getAllProducts,getOneProducts}=require("../controller/productsControllers")


//getting all products..........
//rout GET /api/products
router.get("/",getAllProducts)

//getting single product..........
//rout GET /api/products/:id
router.get("/:id",getOneProducts)

module.exports=router
