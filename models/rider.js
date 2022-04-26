const mongoose = require("mongoose");
const { ObjectId } = mongoose.Schema;

const riderSchema = new mongoose.Schema({
  rider_id: { type:ObjectId },
  email: {
    type: String,
    required: true,
    index: true,},
  name: { type: String, required: true },
  images: {
    type: Array,
  }, 
  address: { type: String, },

 
});

module.exports = mongoose.model("Rider", riderSchema);