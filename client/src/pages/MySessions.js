import React, { Component } from "react";
import axios from "axios";
import API from "../utils/API";
import ReactPlayer from "react-player";

class MySessions extends Component {
  state = {
    sessions: []
  };

  componentDidMount() {
    API.getSessions("brody@mac.com")
      .then(
        res => console.log(res.data) // this.setState({ sessions: res.data })
      )
      .catch(err => console.log(err));
  }

  render() {
    return (
      <div>
        <ReactPlayer url="https://vimeo.com/355394460" playing />
      </div>
    );
  }
}

export default MySessions;
