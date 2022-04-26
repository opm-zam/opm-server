const mongoose = require("mongoose");
const { ObjectId } = mongoose.Schema;

const userSchema = new mongoose.Schema(
  {
    name: String,
    
    email: {
      type: String,
      required: true,
      index: true,
    },
    role: {
      type: String,
      default: "subscriber",
    },
   
    isSeller: {
      type: String,
      enum: ["Yes", "No"],
    },
    isAdmin: { type: Boolean, default: false, required: true },
    isVendor: { type: Boolean, default: false, required: true },
    cart: {
      type: Array,
      default: [],
    },
    address: String,
       wishlist: [{ type: ObjectId, ref: "Product" }],
  },
  { timestamps: true }
);

module.exports = mongoose.model("User", userSchema); //first argument model, second oargument schem name