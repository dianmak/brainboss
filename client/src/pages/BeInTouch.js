import React from "react";
import Nav from "../components/Navbar/Navbar";
import gif from "../assets/images/tenor.gif";
import { Container } from "@material-ui/core";
import "./styling/BeinTouch.css";

function BeInTouch() {
  return (
    <div>
      <Nav />
      <Container id="contain" maxWidth="lg" align="center">
        <h1>You did it! You are one step closer to a managed mind #YAY</h1>
        <img src={gif}></img>
        <h3>
          The link to schedule your call will arrive in your inbox shortly.
        </h3>
      </Container>
    </div>
  );
}

export default BeInTouch;
