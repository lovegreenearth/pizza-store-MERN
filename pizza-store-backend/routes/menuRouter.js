const router = require("express").Router();
const Menu = require("../models/menuModel");

router.post("/add", async (req, res) => {
  try {
    let { name } = req.body.data;

    // validate

    if (!name)
      return res.status(400).json({ msg: "Not all fields have been entered." });
    
    const existingMenu = await Menu.findOne({ name: name });
    if (existingMenu)
      return res
        .status(400)
        .json({ msg: "A menu already exists." });

    const newMenu = new Menu({
      name
    });
    const savedMenu = await newMenu.save();
    res.json(savedMenu);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

router.post("/", async (req, res) => {
  Menu.find({}, function (err, menus) {
    if(err){
        res.send(err);
    }else{
        res.send(menus);
    }
})
});

module.exports = router;
