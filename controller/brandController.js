const bodyparser = require("body-parser");
const { list } = require("parser");
const brandmodel = require("../models/brandmodel");
const Model = require("../models/brandmodel");

//Post the brand data
module.exports.brand = async function (req, res, next) {
    const data = new Model({
      Name: req.body.Name,
      Status: req.body.Status,
    });
    //console.log(data)
    try {
      const dataToSave = await data.save();
      //console.log(dataToSave);
      res.status(200).json(dataToSave);
    } catch (error) {
      res.status(400).json({ message: error.message });
    }
  };

  //Get the All data
  module.exports.getAll = async function (req, res, next) {
    //const brand = find(req.params.brandId)

        try{
          const data = await  Model.find();
          res.json(data)
        //res.status(200).json(brand);
        } catch(error) {
          res.status(500).json({message: error.message});
        }
      };

      //Get data by Id
      module.exports.getId = async function (req, res, next) {
        //const brand = find(req.params.brandId)
    
            try{
              const data = await  Model.findById(req.params.id);
              res.json(data)
            //res.status(200).json(brand);
            } catch(error) {
              res.status(500).json({message: error.message});
            }
          };

         //Update data by Id
          module.exports.putId = async function (req, res, next) {
           //const brand = find(req.params.brandId)
        
                try{
                  const id = req.params.id;
                  const updatedData = req.body;
                //const data = await  Model.findByIdAndUpdate(req.params.id);
                  const data = await Model.findByIdAndUpdate(id, req.body,updatedData
                   // useFindAndModify: false,
                  )
                  res.send(data)
               //res.status(200).json(brand);
                } catch(error) {
                  res.status(500).json({message: error.message});
                }
              };

              //Delete by Id
              module.exports.deleteOne = async function(req, res, next){
                try{
                  const id = req.params.id;
                  const Removedata = req.body;
                  const data = await Model.findByIdAndRemove(req.params.id);
                    
                  res.send(data)
                }
              
              catch(error) {
                res.status(500).json({message: error.message});
              }
            };

         
      

  
