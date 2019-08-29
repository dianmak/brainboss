const mongoose = require("mongoose");
const db = require("../models");

mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/brainboss");

const users = [
  {
    name: "Brody Ward",
    email: "brody@mac.com",
    password: "leealeealeea",
    DOB: "1996-01-10",
    surveyanswers: []
  },
  {
    name: "Kayla Brasali",
    email: "kayla@mac.com",
    password: "leealeea",
    DOB: "1997-02-17",
    surveyanswers: []
  }
];

const sessions = [
  {
    date: new Date("2019-08-20"),
    email: "brody@mac.com",
    videoURL: "https://vimeo.com/355394163",
    notes: ""
  },
  {
    date: new Date("2019-08-27"),
    email: "brody@mac.com",
    videoURL: "https://vimeo.com/355394337",
    notes: ""
  },
  {
    date: new Date("2019-09-03"),
    email: "brody@mac.com",
    videoURL: "https://vimeo.com/355394460",
    notes: ""
  }
];

db.User.deleteMany({})
  .then(() => db.User.insertMany(users))
  .then(data => {
    console.log("Users inserted!" + data);
  })
  .catch(err => {
    console.error(err);
    process.exit(1);
  });

db.Session.deleteMany({})
  .then(() => db.Session.insertMany(sessions))
  .then(data => {
    console.log(data);
    let arr = [];
    data.forEach(session => arr.push(session._id));
    console.log(arr);
    db.User.updateOne({ email: "brody@mac.com" }, { sessions: arr }).then(
      data => {
        console.log("wheeeeeee" + data);
        process.exit(0);
      }
    );
  })
  .catch(err => {
    console.error(err);
    process.exit(1);
  });
