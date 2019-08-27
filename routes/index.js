const path = require("path");
const router = require("express").Router();
const controller = require("../db/controllers/controller");
const db = require("../db/models");
const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;

//passport.use(new LocalStrategy(controller.login,{usernameField:"email", passwordField:"password"}));
passport.use(new LocalStrategy(function (username, password, done){
  console.log(username, password);

  db.User.findOne({ email: username }, function(err, user) {
      if (err) { return done(err); }
      if (!user) {
        return done(null, false, { message: 'User not found.' });
      }
      if (!user.password===password) {
        return done(null, false, { message: 'Incorrect password.' });
      }
      return done(null, user);
    });
}));

router.post("/login",
  passport.authenticate('local', {session:false}), 
  function(req,res){
    console.log("here why why why");
    res.json(req.body.username);
  }
);

router.post("/api/makeuser", controller.makeUser);

router.put("/api/addsurveyresults", controller.addSurveyResults);

router.get("/api/getsessions/:email", controller.getSessions);

//router.post("/api/login", controller.login);

// If no API routes are hit, send the React app
router.use(function(req, res) {
  res.sendFile(path.join(__dirname, "../client/build/index.html"));
});



module.exports = router;
