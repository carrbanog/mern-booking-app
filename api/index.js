const express = require("express");
const cors = require("cors");
const bcrypt = require("bcryptjs");
require("dotenv").config();
const mongoose = require("mongoose");
const app = express();

app.use(cors({
  credentials: true,
  origin: "http://localhost:5173",
}));

mongoose.connect(process.env.DB_CONNECT);

app.use(express.json());

// const testRoutes = require("./routes/testRoutes");

app.use("/test", require("./routes/testRoutes"));
app.use("/register", require("./routes/registerRoutes"));
app.use("/login", require("./routes/loginRoutes"));


app.listen(4000, console.log("connected"));