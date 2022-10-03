const router = require("express").Router();
const Menu = require("../models/menuModel");
const path = require('path');
const fs = require("fs");
var Busboy = require('busboy');

router.get('/', function (req, res) {
  res.writeHead(200, {'Content-Type': 'text/html'});
  res.write('<form action="menus/fileupload" method="post" enctype="multipart/form-data">');
  res.write('<input type="file" name="filetoupload"><br>');
  res.write('<input type="submit">');
  res.write('</form>');
  return res.end();
})


router.post('/fileupload', function (req, res) {
  var busboy = Busboy({ headers: req.headers });
  busboy.on('file', function(name, file, info) {
    const { filename, encoding, mimeType } = info;
    const dir_path = "./uploads/HomeProduct";
    const saveTo = path.join(dir_path, filename);
    file.pipe(fs.createWriteStream(saveTo));
    const menu = new Menu({
      src: filename,
      img: dir_path,
      name
    })
    menu.save(function (err) {
      if(err) console.log(err);
    })
  });
  busboy.on('close', () => {
    res.writeHead(200, { 'Connection': 'close' });
    res.end(`That's all folks!`);
  });
  req.pipe(busboy);
  
  return;
});

router.post("/add", async (req, res) => {
  try {
    let { name, img, src } = req.body.data;

    validate

    if (!name || !img)
      return res.status(400).json({ msg: "Not all fields have been entered." });
    
    const existingMenu = await Menu.findOne({ name: name });
    if (existingMenu)
      return res
        .status(400)
        .json({ msg: "A menu already exists." });

    const newMenu = new Menu({
      name,
      img,
      src
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
