const Category = require('./../models/categoryModel')

const createCategory = async (catBody)=>{
    return await Category.create(req.body)
}

const getAllCategory = async ()=>{
    return await Category.find();
}

const updateCategory = async (id,bodyData)=>{
    return await Category.findByIdAndUpdate({ _id: id } , bodyData,{
        new : true,
        runValidators: true
    })
}

module.exports = {
    createCategory,
    getAllCategory,
    updateCategory
}