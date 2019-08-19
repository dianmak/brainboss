const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const userSchema = new Schema({
    name: { type: String, required: true },
    email: { type: String, required: true },
    DOB: String,
    surveyanswers: [String],
    sessions: [{ type: Schema.Types.ObjectId, ref: "Session" }]
});

const User = mongoose.model("User", userSchema);

module.exports = User;
