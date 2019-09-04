const mongoose = require("mongoose");
const db = require("../models");

mongoose.connect(
  process.env.MONGODB_URI ||
    "mongodb://heroku_gl3t0hk5:heroku_gl3t0hk5@ds353457.mlab.com:53457/heroku_gl3t0hk5"
);

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
    videoURL: "https://vimeo.com/355394337",
    notes: {
      summary: "hrekjwhlfdjksal",
      thoughts: ["jfdlisajfkdlsa;", "fhdsjkafhdlsjak"],
      circumstances: ["fjdkslaj;fdkl;sa", "fjdklsajfkdls;a"],
      assignment: "fjdkslahfdkl;sajfkdls;ajkl;sa"
    }
  },
  {
    date: new Date("2019-08-27"),
    email: "brody@mac.com",
    videoURL: "https://vimeo.com/355394163",
    notes: {
      summary:
        "We talked about your job and how you can manage your mind around it to create the balance that you want between it and other areas of your life. More specifically, we worked on your plan for how you'll think the next time you experience a prolonged period of stress at work. We discussed the difference between thoughts and circumstances and touched upon how your thoughts create your experience.",
      thoughts: [
        "My hours are pretty insane.",
        "I used to never make plans because I had so much time. Now I have to plan everything.",
        "Having to work isn't fun.",
        "The pay is very good."
      ],
      circumstances: [
        "Graduated this year.",
        "Working at Goldman Sachs.",
        "Work from 6am to 8pm."
      ],
      model: ["C: Currently working at Goldman Sachs.", "T:"],
      assignment: "fjdkslahfdkl;sajfkdls;ajkl;sa"
    }
  },
  {
    date: new Date("2019-09-03"),
    email: "brody@mac.com",
    videoURL: "https://vimeo.com/355394460",
    notes: {
      summary: "hrekjwhlfdjksal",
      thoughts: ["jfdlisajfkdlsa;", "fhdsjkafhdlsjak"],
      circumstances: ["fjdkslaj;fdkl;sa", "fjdklsajfkdls;a"],
      assignment: "fjdkslahfdkl;sajfkdls;ajkl;sa"
    }
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
