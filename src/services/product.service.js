const Product = require('./../models/productModel');

const createProduct = async (reqBody)=>{
    return await Product.create(reqBody)
}

const getAllProduct = async ()=>{
    return await Product.find()
}

const getProductbyName = async (name)=>{
    return await Product.find({name})
}

const updateProduct = async (id,updateQty)=>{
    await Product.findByIdAndUpdate({_id:id},{qty:updateQty})
}

module.exports ={
    createProduct,
    getAllProduct,
    updateProduct
}