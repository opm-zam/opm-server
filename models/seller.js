const mongoose = require("mongoose");
const { ObjectId } = mongoose.Schema;

const shopSchema = new mongoose.Schema({
  seller_id: { type:ObjectId },
  email: {
    type: String,
    required: true,
    index: true,},
  name: { type: String, required: true },
  description: { type: String, required: true },
  images: {
    type: Array,
  }, 
  revenue: {
    type: Number,
    default: 0,
  },
  address: { type: String, },

  product: [{ type: ObjectId, ref: "Product" }],
});

module.exports = mongoose.model("Shop", shopSchema);