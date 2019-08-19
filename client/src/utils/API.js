import axios from "axios";

export default {
  // Create new user profile upon user entering information on website
  makeUser: function (userData) {
    console.log("in makeuser in API.js");
    return axios.post("/api/makeuser", userData);
  },
  // Gets all sessions
  getSessions: function () {
    return axios.get("/api/sessions");
  },
  // Post homework / add comment
  addComment: function (id) {
    return axios.post("/api/sessions/addcomment/" + id);
  }
};
