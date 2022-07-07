// function used for making a directory for categories
exports.createCategories=(categories,parentId = null)=>{
    let categoryList = [];
    let category;
    if(parentId == null){
        category = categories.filter(cate=> cate.parentID == undefined)
    }else{
        category = categories.filter(cate=> cate.parentID == parentId)
    }
    if(category.length>0){
    for(let cate of category){
        categoryList.push({
            _id:cate._id,
            name:cate.name,
            children: createCategories(categories,cate._id)
        })
    }return categoryList;}else{
        return undefined
    }    
}
