const invoiceDetail = require('./../models/invoiceModel')
const Invoice = require('./../models/invoiceModel')


const storeDetailsOfInvoice = async(reqBody)=>{
    await invoiceDetail.create(reqBody)
}

const generateInvoice = async(reqBody)=>{
    await Invoice.create(reqBody)
}
module.exports = {
    storeDetailsOfInvoice,
    generateInvoice
}