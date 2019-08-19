import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./App.css";
import Nav from "./components/Navbar";
import Home from "./pages/Home";
import WorkWithMe from "./pages/WorkWithMe";
import Survey from "./pages/Survey";
import MyInfo from "./pages/MyInfo";
import API from "./utils/API";

class App extends Component {

  state = {
    email: "",
    fullname: "",
    DOB: "",
    surveyAnswers: []
  }

  handleChange = e => {
    console.log(e.target);
    const { name, value } = e.target;
    console.log(name + value);
    this.setState({
      [name]: value
    });
  }

  handleFormSubmit = DOB => {
    console.log("in handle form submit in app.js");
    console.log("states: " + this.state.email);
    API.makeUser({
      name: this.state.fullname,
      email: this.state.email,
      DOB: DOB
    });
  }

  render() {
    return (
      <Router>
        <div>
          <Nav />
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/workwithme" component={WorkWithMe} />
            <Route exact path="/survey" component={Survey} />
            <Route exact path="/myinfo" render={(props) => <MyInfo {...props} onChange={this.handleChange} handleFormSubmit={this.handleFormSubmit} />} />

          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;
