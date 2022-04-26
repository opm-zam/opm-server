const Shop = require("../models/seller");


exports.register = async(req,res) =>{
  try {
    console.log(req.body);
   
  
    const newShop = await new Shop(req.body).save();
    res.json(newShop);
  } catch (err) {
    console.log(err);
    // res.status(400).send("Create product failed");
    res.status(400).json({
      err: err.message,
    });
  }
  }
  