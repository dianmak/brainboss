import React, { Component } from "react";
import Container from "@material-ui/core/Container";
import { Grid, Button } from "@material-ui/core";
import Nav from "../components/Navbar/Navbar";
import Footer from "../components/Footer/Footer";
import photo from "../assets/images/about.jpg";
import "./styling/About.css";

function About() {
  return (
    <div>
      <Nav />
      <Grid container spacing={3}>
        <Grid item xs={6} id="textboxabout">
          <h1>Who am I?</h1>
          <h3>
            <ul>
              <li>Hello! My name is Dian ☺️</li>
              <li>
                I am a young woman born and raised in Indonesia, somewhere
                between Generations Y and Z.
              </li>
              <li>
                I studied Cognitive and Brain Sciences at Tufts University and
                have worked in research labs and at a genomics company.
              </li>
              <li>I was certified by The Life Coach School. </li>
              <li>
                I am eager to work with clients on any number of areas,
                including body image, family, social anxiety, love life, career,
                and even existential crises involving extraterrestrial life.{" "}
              </li>
              <li>
                {" "}
                I am human to a Belgian Malinois and a Russian tortoise.{" "}
              </li>
            </ul>
            <Button variant="outlined" color="primary" href="/myinfo">
              Apply for a Consultation Call Now
            </Button>
            <br></br>
            <p>Still not sure what this is all about?</p>
          </h3>
        </Grid>
        <Grid item xs={6} align="center">
          <img id="photoabout" src={photo}></img>
        </Grid>
      </Grid>
      <Grid container spacing={3}>
        <Grid item xs={12} align="center">
          <h1> What the heck is life coaching?</h1>
        </Grid>
      </Grid>

      <Footer />
    </div>
  );
}

export default About;
