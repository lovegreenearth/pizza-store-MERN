const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
require("dotenv").config();

// set up express

const app = express();
app.use(express.json());
app.use(cors());

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`The server has started on port: ${PORT}`));

// set up mongoose

let url = "mongodb://localhost:27017/pizza_store_db";

mongoose.connect(
  // process.env.MONGODB_CONNECTION_STRING,
  url,
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
  },
  (err) => {
    if (err) throw err;
    console.log("MongoDB connection established");
  }
);

// set up routes

app.use("/users", require("./routes/userRouter"));
app.use("/menus", require("./routes/menuRouter"));
app.use("/pizzas", require("./routes/pizzaRouter"));
app.use("/doughs", require("./routes/doughRouter"));
app.use("/sauce", require("./routes/sauceRouter"));
app.use("/cheese", require("./routes/cheeseRouter"));
app.use("/topping", require("./routes/toppingRouter"));
