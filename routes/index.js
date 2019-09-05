const path = require("path");
const router = require("express").Router();
const controller = require("../db/controllers/controller");
const db = require("../db/models");
const passport = require("passport");
const LocalStrategy = require("passport-local").Strategy;

passport.use(
  new LocalStrategy(function(username, password, done) {
    console.log(username, password);
    console.log("WHEEEEEEEEEEEEEEE");

    db.User.findOne({ email: username }, (err, user) => {
      console.log("err: " + err);
      console.log("user: " + user);
      if (err) {
        console.log("ERROR");
        return done(err);
      }
      if (!user) {
        console.log("USER NOT FOUND");
        return done(null, false, { message: "User not found." });
      }
      if (user.password != password) {
        console.log("INCORRECT PASSWORD");
        return done(null, false, { message: "Incorrect password." });
      }
      console.log("LOGGED IN");
      return done(null, user);
    });
  })
);

passport.serializeUser(function(user, done) {
  done(null, user.email);
});

passport.deserializeUser(function(email, done) {
  db.User.findOne({ email: email }, function(err, user) {
    done(err, user);
  });
});

router.post("/login", passport.authenticate("local"), function(req, res) {
  console.log("in login route in router");
  //res.json(req.body.username);
  console.log("you have logged in and you are: " + req.user);
  res.json({ username: req.body.username });
});

router.post("/api/makeuser", controller.makeUser);

router.put("/api/addsurveyresults", controller.addSurveyResults);

router.get("/api/getsessions/:email", controller.getSessions);

router.post("/api/sessions/addcomment", controller.addComments);

router.get("/logout", function(req, res) {
  req.logout();
  res.json({ data: req.user });
});

//router.post("/api/login", controller.login);

// If no API routes are hit, send the React app
router.use(function(req, res) {
  res.sendFile(path.join(__dirname, "../client/build/index.html"));
});

module.exports = router;
