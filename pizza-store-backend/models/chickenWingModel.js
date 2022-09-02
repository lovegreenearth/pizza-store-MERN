const { ObjectId } = require("mongoose");
const mongoose = require("mongoose");

const chickenWingSchema = new mongoose.Schema({
  name: { 
    type: String, 
    required: true, 
    unique: true 
  },
});

module.exports = ChickenWing = mongoose.model("chickenWing", chickenWingSchema);