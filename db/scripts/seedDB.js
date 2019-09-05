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
      summary:
        "This time, we covered your belief system around family and examined the thoughts you have about your mom, dad and brothers.",
      thoughts: [
        "We have to talk to each other every day.",
        "My mom is weirdly sensitive.",
        "James always chooses bad girlfriends."
      ],
      circumstances: [
        "Immediate family includes Mom, Dad, twin brother and older brother.",
        "We all speak on the phone to each other almost every day.",
        "My brothers have been dating."
      ],
      model: [
        "C: Family exists and is alive.",
        "T: They don't get how they're annoying.",
        "F: Frustration",
        "A: Be rude, shut down, lash out.",
        "R: I am being annoying."
      ],
      assignment:
        "If you could snap your fingers and have each member of your family behave exactly the way you want them to, what would that look like? Why do you think you want them to behave like that?"
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
      model: [
        "C: Currently working at Goldman Sachs.",
        "T: This is stressful.",
        "F: Anxiety",
        "A: Spend time complaining to friends and family.",
        "R: Made myself more stressed."
      ],
      assignment:
        "What does work-life balance mean to you? Be as specific as you can. What are some thoughts that you currently have about your work life that do not help create the balance that you want?"
    }
  },
  {
    date: new Date("2019-09-03"),
    email: "brody@mac.com",
    videoURL: "https://vimeo.com/355394460",
    notes: {
      summary:
        "The topic of discussion for this session was your current position at BNY Mellon. We talked about what you were making your job mean about you and your future, and how this is an optional way to interpet your circumstances.",
      thoughts: [
        "I am optimistic to the point of being unrealistic.",
        "I want to be one of those people.",
        "What I’m doing is insignificant.",
        "If I left and didn’t show up, nothing would change.",
        "It’s unrealistic to think that at 23 I can change the world.",
        "I want to work at a prestigious bank because I will get to think that I am on track to better things."
      ],
      circumstances: [
        "Work at BY Mellon.",
        "Only did internships before that were a couples months long.",
        "Read books about finance giants.",
        "Grew up with family members in finance."
      ],
      model: [
        "C: I work at BY Mellon",
        "T: My work is insignificant",
        "F: Discouraged",
        "A: Look at other jobs, think about other options, distract myself",
        "R: subpar work. Work is even more insignificant."
      ],
      assignment:
        "List everything that would/would not happen if you did not show up to work."
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
