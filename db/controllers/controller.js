const db = require("../models");

module.exports = {
  makeUser: function(req, res) {
    console.log(req.body);
    db.User.create(req.body)
      .then(dbUser => res.json(dbUser))
      .catch(err => res.status(422).json(err));
  },
  addSurveyResults: function(req, res) {
    // db.User
    //     .update()
    //     .then(dbUser => res.json(dbUser))
    //     .catch(err => res.status(422).json(err));
    db.User.updateOne(
      { email: req.body.email },
      { surveyanswers: req.body.answers }
    )
      .then(dbUser => res.json(dbUser))
      .catch(err => res.status(422).json(err));
    console.log(req.body);
  },
  getSessions: function(req, res) {
    db.User.findOne({ email: req.params.email })
      .then(user => res.json(user))
      .catch(err => res.status(422).json(err));
  },

  login: function(username, password, done) {
      console.log("wheeeeeeeeee");
      console.log(user);

    db.User.findOne({ email: user }, function(err, user) {
      if (err) { return done(err); }
      if (!user) {
        return done(null, false, { message: 'User not found.' });
      }
      if (!user.password===password) {
        return done(null, false, { message: 'Incorrect password.' });
      }
      return done(null, user);
    });

  }

};
