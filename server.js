const express = require("express");
const mongoose = require("mongoose");
const routes = require("./routes");
const path = require("path");
const passport = require("passport");
const LocalStrategy = require("passport-local").Strategy;
const PORT = process.env.PORT || 3001;
const app = express();
const flash= require("connect-flash");
//const seedData = require("./db/scripts/seedDB");

// Define middleware here
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
// Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}


// app.use(function(req,res,next){
//   console.log(req.body);
//   next();
// })
// Add routes, both API and view
// app.use(flash);
app.use(passport.initialize());

app.use(routes);

// Connect to the Mongo DB
mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/brainboss");

// Send every request to the React app
// Define any API routes before this runs
app.get("*", function(req, res) {
  res.sendFile(path.join(__dirname, "./client/build/index.html"));
});

app.listen(PORT, function() {
  console.log(`🌎 ==> API server now on port ${PORT}!`);
});
