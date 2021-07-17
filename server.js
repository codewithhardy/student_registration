const express = require("express");
const app = express();
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const routeUrls = require("./route");
const cors = require("cors");
app.use(express.json()); //to activate body parser

dotenv.config();
mongoose.connect(process.env.DATABASE_ACCESS, () =>
  console.log("Database connected")
);

const port = process.env.PORT || 5000;

app.use(cors());
app.use("/app", routeUrls);

app.listen(port, () => console.log(`Server running on port ${port} 🔥`));
