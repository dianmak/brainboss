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
      .populate("sessions")
      .then(user => res.json(user))
      .catch(err => res.status(422).json(err));
  },

  addComments: function(req, res) {
    console.log("comment is " + req.body.comment);
    db.Session.updateOne({ _id: req.body.id }, { homework: req.body.comment })
      .then(dbSession => res.json(dbSession))
      .catch(err => res.status(422).json(err));
  }
};
