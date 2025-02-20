const express = require("express");
const cors = require("cors");
const app = express();

app.use(cors({
  credentials: true,
  origin: "http://localhost:5173",
}));

app.use(express.json());

// const testRoutes = require("./routes/testRoutes");

app.use("/test", require("./routes/testRoutes"));
app.use("/register", require("./routes/loginRoutes"));

app.listen(4000, console.log("connected"));