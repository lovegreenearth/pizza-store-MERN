const router = require("express").Router();
const Topping = require("../models/toppingModel");
const mongoose = require("mongoose");

router.post("/add", async (req, res) => {
  try {
    let { name, cal, price, category } = req.body.data;

    // validate

    if (!name || !cal || !category || !price)
      return res.status(400).json({ msg: "Not all fields have been entered." });

    const newTopping = new Topping({
      name,
      cal, 
      price,
      category
    });
    const savedTopping = await newTopping.save();
    res.json(savedTopping);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

router.post("/", async (req, res) => {
  Topping.find({}, function (err, topping) {
    if(err){
        res.send(err);
    }else{
        res.send(topping);
    }
})
});

module.exports = router;
