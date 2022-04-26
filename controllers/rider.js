const Rider= require("../models/rider");


exports.riderregister = async(req,res) =>{
  try {
    console.log(req.body);
   
  
    const newRider = await new Rider(req.body).save();
    res.json(newRider);
  } catch (err) {
    console.log(err);
    // res.status(400).send("Create product failed");
    res.status(400).json({
      err: err.message,
    });
  }
  }
  