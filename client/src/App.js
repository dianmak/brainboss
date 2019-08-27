import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./App.css";
import Nav from "./components/Navbar";
import Home from "./pages/Home";
import WorkWithMe from "./pages/WorkWithMe";
import Survey from "./pages/Survey";
import MyInfo from "./pages/MyInfo";
import Login from "./pages/Login";
import BeInTouch from "./pages/BeInTouch";
import MySessions from "./pages/MySessions";
import API from "./utils/API";

class App extends Component {
  state = {
    email: "",
    fullname: "",
    DOB: "",
    surveyAnswers: []
  };

  handleChange = e => {
    console.log(e.target);
    const { name, value } = e.target;
    console.log(name + value);
    this.setState({
      [name]: value
    });
  };

  handleInfoSubmit = DOB => {
    console.log("in handle form submit in app.js");
    console.log("states: " + this.state.email);
    return API.makeUser({
      name: this.state.fullname,
      email: this.state.email,
      DOB: DOB
    });
  };

  handleSurveySubmit = array => {
    console.log("in handle survey submit in app.js");
    return API.addSurveyResults({ email: this.state.email, answers: array });
  };


  render() {
    return (
      <Router>
        <div>
          <Nav />
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/workwithme" component={WorkWithMe} />
            <Route
              exact
              path="/survey"
              render={props => (
                <Survey {...props} handleFormSubmit={this.handleSurveySubmit} />
              )}
            />
            <Route
              exact
              path="/myinfo"
              render={props => (
                <MyInfo
                  {...props}
                  onChange={this.handleChange}
                  handleFormSubmit={this.handleInfoSubmit}
                />
              )}
            />
            <Route exact path="/beintouch" component={BeInTouch} />
            <Route
              exact
              path="/loginpage"
              render={props => (<Login {...props} login={this.handleLogin} />)}
            />
            <Route exact path="/mysessions" component={MySessions} />
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;
