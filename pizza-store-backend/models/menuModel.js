const mongoose = require("mongoose");

const menuSchema = new mongoose.Schema({
  name: { 
    type: String, 
    required: true, 
    unique: true 
  }
});

module.exports = Menu = mongoose.model("menu", menuSchema);