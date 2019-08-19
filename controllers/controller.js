const db = require("../models");

module.exports = {
    makeUser: function (req, res) {
        console.log(req.body);
        db.User
            .create(req.body)
            .then(dbUser => res.json(dbUser))
            .catch(err => res.status(422).json(err));
    },
    addSurveyResults: function (req, res) {
        db.User
            .update()
            .then(dbUser => res.json(dbUser))
            .catch(err => res.status(422).json(err));
    }
};
