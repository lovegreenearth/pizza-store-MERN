const { ObjectId } = require("mongoose");
const mongoose = require("mongoose");

const pizzaSchema = new mongoose.Schema({
  name: { 
    type: String, 
    required: true, 
    unique: true 
  },
  bonus: { 
    type: String, 
  },
  bonusTopping: { 
    type: Number, 
  },
  price: { 
    type: Number, 
    required: true, 
  },
  menuId: { 
    type: ObjectId, 
    required: true, 
  }
});

module.exports = Pizza = mongoose.model("pizza", pizzaSchema);