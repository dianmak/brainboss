import React, { Component } from "react";
import axios from "axios";
import API from "../utils/API";
import ReactPlayer from "react-player";
import {
  Container,
  Typography,
  Grid,
  AppBar,
  TextField,
  Button
} from "@material-ui/core";
import "./styling/MySessions.css";
import { format, toDate, parseISO } from "date-fns";

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
        console.log(format(parseISO(this.state.sessions[0].date)), "PPPP");
      })
      .catch(err => console.log(err));
  }

  handleSubmit(e) {
    e.preventDefault();
  }

  render() {
    return (
      <div>
        <AppBar position="static" id="navbar">
          {" "}
          <Typography id="navitem">BRAINBOSS CLIENT PORTAL</Typography>
        </AppBar>
        {this.state.sessions.map(session => (
          <Container
            maxWidth="md"
            justify="center"
            aligncontent="center"
            id="container"
          >
            <Typography variant="h6" id="date">
              {/* {format(toDate(session.date),"PPPP")} */}
            </Typography>
            <ReactPlayer url={session.videoURL} id="video" />
            <div id="coachcomments">
              <h4>Summary</h4>
              <p>{session.notes.summary}</p>
              <ul>
                <h4>Circumstances:</h4>
                {session.notes.circumstances.map(c => (
                  <li>{c}</li>
                ))}
              </ul>
              <ul>
                <h4> Thoughts</h4>
                {session.notes.circumstances.map(c => (
                  <li>{c}</li>
                ))}
              </ul>
              <h4>Model</h4>
              fjkdlsajfkdlsajfkld <br></br>s;ajfld;ksajfkl;ds
              <h4>Assignment</h4>
              <p>{session.notes.assignment}</p>
            </div>

            <TextField
              className="clientcomments"
              id={session._id}
              label="Label"
              style={{ margin: 8 }}
              placeholder="Placeholder"
              helperText="Type or paste your homework here."
              fullWidth
              margin="normal"
              multiline="true"
            />
            <Button
              variant="outlined"
              name={session._id}
              onClick={this.handleSubmit}
            >
              Submit
            </Button>
          </Container>
        ))}
      </div>
    );
  }
}

export default MySessions;
