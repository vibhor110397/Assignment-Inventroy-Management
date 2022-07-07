const catchAsync = require('./../utils/catchAsync')
const ShortUniqueId = require('short-unique-id')
const uid = new ShortUniqueId({ length: 10 });
const orderService = require('./../services')
const productService = require('./../services')
const userService = require('./../services')


// generate unique invoice number
function generate_random(){
    return uid.stamp(10);
}
// store OrderData in invoiceDetail DB and update the product details
const storeDetailsAndUpdateDetails = async(items,invoiceNo,sub_total)=>{
    const promises=items.map(item=>{
        return (async () => {
            const { p_name,p_qty } = item
        // find the prodcut with the help of itemname
        const actualProduct = await productService.getProductbyName(p_name)

        //get the actualPrice of prodcut
        const p_price = actualProduct[0].price  
        //save the data in inoicedetails DB   data : invoiceNo , p_Name , p_QTY,p_Price
        await orderService.storeDetailsOfInvoice({
            invoiceNo,
            p_name,
            p_qty,
            p_price
        })
        const updateQty = actualProduct[0].qty - p_qty
        await productService.updateProduct(actualProduct[0]._id,updateQty)
        sub_total += (parseInt(p_price)*parseInt(p_qty))
        })()    
    })
    await Promise.all(promises)
    return sub_total;
}

const generateInvoice = async(sub_t,paidAmt,invoiceNo,custName)=>{
    const gst = (18/100 * sub_t)
    const netTotal = sub_t + gst;
    const orderDate = Date.now();
    const due = netTotal - paidAmt;
    await orderService.generateInvoice({
        invoiceNo,custName,orderDate,subtotal:sub_t,gst,netTotal,paidAmt,due
    })
}


exports.placeOrder = catchAsync(async(req,res,next)=>{
    // 1.) generate randon id
    const invoiceNo = generate_random();
    // 2.) store Order items in invoiceDetailsModel DB
    const items = req.body.items;
    // 3.) storeDetailsAndUpdateDetails and get subtotal
    const sub_t = await storeDetailsAndUpdateDetails(items,invoiceNo,0)
    // 4.) retreive username from the usertable
    const user = await userService.getUserById(req.user.id)
    // 5.) generate the invoice of orders
    await generateInvoice(sub_t,req.body.paidAmt,invoiceNo,user.name)
    
        res.status(200).json({
            message:"Your Order Placed Successfully,Please Download your invoice",
            data:{
                user:user.name,
                invoiceNo
            }
        })
})


