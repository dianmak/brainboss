const express = require("express");
const mongoose = require("mongoose");
const routes = require("./routes");
const path = require("path");
const passport = require("passport");
const PORT = process.env.PORT || 3001;
const app = express();

//const seedData = require("./db/scripts/seedDB");

// Define middleware here
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
// Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}

app.use(
  require("express-session")({
    secret: "keyboard cat",
    resave: false,
    saveUninitialized: false
  })
);
app.use(passport.initialize());
app.use(passport.session());

app.use(routes);

// Connect to the Mongo DB
mongoose.connect(
  process.env.MONGODB_URI ||
    "mongodb://heroku_gl3t0hk5:heroku_gl3t0hk5@ds353457.mlab.com:53457/heroku_gl3t0hk5",
  {
    useNewUrlParser: true
  }
);

// Send every request to the React app
// Define any API routes before this runs
app.get("*", function(req, res) {
  res.sendFile(path.join(__dirname, "./client/build/index.html"));
});

app.listen(PORT, function() {
  console.log(`🌎 ==> API server now on port ${PORT}!`);
});
