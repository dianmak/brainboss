const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const sessionSchema = new Schema({
    date: { type: Date, required: true },
    email: { type: String, required: true },
    videoURL: String,
    //notes contains the coach recap and homework assignment
    notes: String,
    //client's homework response
    homework: String
});

const Session = mongoose.model("Session", sessionSchema);

module.exports = Session;
