const catchAsync = require('./../utils/catchAsync')
const productService = require('./../services/product.service')

exports.addProduct = catchAsync(async(req,res,next)=>{
    //res.status(200).json({file:req.files,body:req.body})
    const {name,qty,price,category} = req.body
    let productPictures = [];
    if(req.files.length>0){
        productPictures = req.files.map(file =>{
            return {img:file.filename}
        })
    }
    const product = await productService.createProduct({
        name,qty,price,productPictures,category,createdBy:req.user._id
    })

    res.status(201).json({
        message:"Success",
        product
    })
})
// get All Products
exports.getAllProducts = catchAsync(async(req,res,next)=>{
    const products = await productService.getAllProduct();
    res.status(200).json({
        message:"Success",
        data:{
            products
        }
    })
})

