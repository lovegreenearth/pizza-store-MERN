const { ObjectId } = require("mongoose");
const mongoose = require("mongoose");

const toppingSchema = new mongoose.Schema({
  name: { 
    type: String, 
    required: true, 
    unique: true 
  },
  cal: { 
    type: Number, 
  },
  price: { 
    type: Number, 
    required: true, 
  },
  category: {
    type: String,
    required: true,
  }
});

module.exports = Topping = mongoose.model("topping", toppingSchema);