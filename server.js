const express = require("express");
const mongoose = require("mongoose");
const path = require("path");
const PORT = process.env.PORT || 3001;
const app = express();
const bugsController = require("./controllers/bugController");
const router = require("express").Router();
const bodyParser = require("body-parser");
// const session = require("express-session");
const cors = require("cors");


app.use(cors());
app.use(require("morgan")("dev"));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, "public")));
// app.use(
//   session({
//     secret: "passport-tutorial",
//     cookie: { maxAge: 60000 },
//     resave: false,
//     saveUninitialized: false,
//   })
// );

// Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}

// Connect to the Mongo DB
mongoose.connect(
  process.env.MONGODB_URI || "mongodb://localhost/bugCollection"
);


require("./models/Users");
require("./config/passport");
app.use(require("./routes"));



app.get("*", function (req, res) {
  res.sendFile(path.join(__dirname, "./client/build/index.html"));
});

app.listen(PORT, function () {
  console.log(`🌎 ==> API server now on port ${PORT}!`);
});