const catchAsync = require('./../utils/catchAsync')
const AppError = require('./../utils/appError')
const categoryService = require('./../services')
const categoryMiddleware = require('./../middlewares/categoryMiddleware')


// Add New Category or Sub-Category
exports.addCategory = catchAsync(async(req,res)=>{

    let category = await categoryService.categoryService(req.body);

    res.status(201).json({
        status:"success",
        data:{
            category
        }
    })
})

// Get All Categories
exports.getCategories =catchAsync(async(req,res,next)=>{
    const allCategories = await categoryService.getAllCategory()
    // console.log(typeof(allCategories));
    const categoryList = categoryMiddleware.createCategories(allCategories);
    res.status(200).json({
        length:categoryList.length,
        data:{
            categoryList
        }
    })
})

// Update a Category
exports.updateCategory = catchAsync(async(req,res,next)=>{
    //console.log(req.params.id)
    const UpdateCategory = await categoryService.UpdateCategory(req.params.id,req.body)
    res.status(200).json({
        status: "Success",
        data:{
            UpdateCategory
        }
    })
});