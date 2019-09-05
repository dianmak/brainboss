import React, { Component } from "react";
import API from "../utils/API";
import ReactPlayer from "react-player";
import {
  Container,
  Typography,
  AppBar,
  TextField,
  Button
} from "@material-ui/core";
import "./styling/MySessions.css";
import { format, parseISO } from "date-fns";

class MySessions extends Component {
  state = {
    sessions: []
  };

  componentDidMount() {
    API.getSessions("brody@mac.com")
      .then(res => {
        this.setState({ sessions: res.data.sessions });
        console.log(format(parseISO(this.state.sessions[0].date), "PPPP"));
      })
      .catch(err => console.log(err));
  }

  logout = () => {
    API.logout()
      .then(res => {
        console.log("in promise" + res);
        this.props.history.push("/");
      })
      .catch(err => console.log(err));
  };

  handleSubmit = id => {
    console.log(id);
    const homework = document.getElementById(id).value;
    console.log(homework);
    API.addComment(id, homework).then(res => {
      console.log(res);
      API.getSessions("brody@mac.com")
        .then(res => {
          console.log("HERE");
          this.setState({ sessions: res.data.sessions });
          console.log(this.state.sessions);
        })
        .catch(err => console.log(err));
    });
  };

  render() {
    return (
      <div id="body">
        <AppBar position="static" id="navbar">
          <span id="navitem">BRAINBOSS CLIENT PORTAL</span>
          <Button id="logout" onClick={this.logout}>
            Logout
          </Button>
        </AppBar>
        {this.state.sessions.map(session => (
          <Container
            maxWidth="md"
            justify="center"
            aligncontent="center"
            id="container"
            border={3}
          >
            <Typography variant="h6" id="date">
              {format(parseISO(this.state.sessions[0].date), "PPPP")}
            </Typography>
            <ReactPlayer url={session.videoURL} id="video" />
            <div id="coachcomments">
              <h4>Summary</h4>
              <p>{session.notes.summary}</p>
              <ul>
                <h4>Circumstances</h4>
                {session.notes.circumstances.map(c => (
                  <li>{c}</li>
                ))}
              </ul>
              <ul>
                <h4> Thoughts</h4>
                {session.notes.thoughts.map(t => (
                  <li>{t}</li>
                ))}
              </ul>
              <ul>
                <h4>Model</h4>
                {session.notes.model.map(line => (
                  <li>{line}</li>
                ))}
              </ul>

              <h4>Assignment</h4>
              <p>{session.notes.assignment}</p>
              <h4>Homework</h4>
              <p>{session.homework}</p>
            </div>

            <TextField
              className="clientcomments"
              id={session._id}
              label="Please refer to the above assignment and type your responses here."
              style={{ margin: 8 }}
              placeholder="This week's homework..."
              // helperText="Type or paste your homework here."
              fullWidth
              margin="normal"
              multiline="true"
              color="white"
            />
            <Button
              variant="outlined"
              name={session._id}
              onClick={() => this.handleSubmit(session._id)}
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
