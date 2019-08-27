import axios from "axios";

export default {
  // Create new user profile upon user entering information on website
  makeUser: function(userData) {
    console.log("in makeuser in API.js");
    return axios.post("/api/makeuser", userData);
  },
  // Adds survey answers to user
  addSurveyResults: function(answers) {
    console.log("in addsurveyresults in API.js");
    return axios.put("/api/addsurveyresults", answers);
  },
  login: function(email, password) {
    console.log("Attempting login in API.js");
    console.log(email);
    console.log(password);
    return axios.post("/login", {email, password});
  },
  // Gets all sessions
  getSessions: function(email) {
    return axios.get("/api/getsessions/" + email);
  },
  // Post homework / add comment
  addComment: function(id) {
    return axios.post("/api/sessions/addcomment/" + id);
  }
};
