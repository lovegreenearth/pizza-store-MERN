const router = require("express").Router();
const ChickenWing = require("../models/chickenWingModel");
const mongoose = require("mongoose");

router.post("/add", async (req, res) => {
  try {
    let { name } = req.body.data;

    // validate

    if (!name)
      return res.status(400).json({ msg: "Not all fields have been entered." });

    const newChickenWing = new ChickenWing({ name });
    const saveChickenWing = await newChickenWing.save();
    res.json(saveChickenWing);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

router.post("/", async (req, res) => {
  ChickenWing.find({}, function (err, chickenWing) {
    if(err){
        res.send(err);
    }else{
        res.send(chickenWing);
    }
})
});

module.exports = router;
