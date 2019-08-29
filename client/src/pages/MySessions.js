import React, { Component } from "react";
import axios from "axios";
import API from "../utils/API";
import ReactPlayer from "react-player";
import { Container, Typography, Grid } from "@material-ui/core";
import "./styling/MySessions.css";
import { format, toDate, parseISO } from 'date-fns';

class MySessions extends Component {
  state = {
    sessions: []
  };

  componentDidMount() {
    API.getSessions("brody@mac.com")
      .then(res => {
        console.log(res.data);
        this.setState({ sessions: res.data.sessions });
        console.log(this.state.sessions);
        console.log(format(parseISO(this.state.sessions[0].date)), 'PPPP');
      })
      .catch(err => console.log(err));
  }

  render() {
    return (
      <div>
        {this.state.sessions.map(session => (
          <Container maxWidth="md" justify="center" aligncontent="center" id="container">
          <Typography variant="h6" id="date">
            {/* {format(toDate(session.date),"PPPP")} */}
          </Typography>
          <ReactPlayer url={session.videoURL} id="video" />
          <Typography variant="body1" id="coachcomments"> 
            fjlsafjdkl;sajfldsjfklsajfkdlsa;jfkdl;sajfkdslaj;fkds;
            jfdklsafjdkl;sajfklds;ajfkdls;ajfdklsajfdklsajfdklsa;jfdklsafjdkl
          </Typography>
          <Typography variant="body1" id="clientcomments"> 
            fjlsafjdkl;sajfldsjfklsajfkdlsa;jfkdl;sajfkdslaj;fkds;
            jfdklsafjdkl;sajfklds;ajfkdls;ajfdklsajfdklsajfdklsa;jfdklsafjdkl
          </Typography>
          </Container>
        ))}
      </div>
    );
  }
}

export default MySessions;
