import React, { Component } from "react";
import { Grid, TextField, Button, makeStyles } from "@material-ui/core";

class Survey extends Component {
    constructor(props) {
        super(props);
        this.style = {
            color: 'orange'
        }
        //const surveyStyles = makeStyles({
        //   root: {
        //      backgroundColor: 'orange'
        //  }
        //})
    }


    handleChange = e => {
        const { name, value } = e.target;
        this.setState({
            [name]: value
        });
    }

    handleFormSubmit = e => {
        e.preventDefault();
        console.log(this.state);
    }

    render() {
        //const classes = this.surveyStyles();
        return (

            <Grid container alignItems="center" justify="center" alignContent="center" direction="column" >
                <h1>Hello from Survey</h1>

                <Grid item md={10}>
                    <TextField name="surveyQ1" value={this.state.surveyQ1} onChange={this.handleChange} fullWidth multiline={true} label="Why are you interested in coaching?" />
                    <TextField name="surveyQ2" value={this.state.surveyQ2} onChange={this.handleChange} fullWidth multiline={true} label="What do you hope to accomplish with coaching?" />
                    <TextField name="surveyQ3" value={this.state.surveyQ3} onChange={this.handleChange} fullWidth multiline={true} label="Are you willing to try all the exercises and homework? (Especially the ones you have resistance to?)" />
                    <TextField name="surveyQ4" value={this.state.surveyQ4} onChange={this.handleChange} fullWidth multiline={true} label="What is your biggest fear in life?" />
                    <TextField name="surveyQ5" value={this.state.surveyQ5} onChange={this.handleChange} fullWidth multiline={true} label="What are five major positive events in your life?" />
                    <TextField name="surveyQ6" value={this.state.surveyQ6} onChange={this.handleChange} fullWidth multiline={true} label="What are five major negative events in your life?" />
                    <TextField name="surveyQ7" value={this.state.surveyQ7} onChange={this.handleChange} fullWidth multiline={true} label="What do you most want to change in your life?" />
                    <TextField name="surveyQ8" value={this.state.surveyQ8} onChange={this.handleChange} fullWidth multiline={true} label="Do you believe you are living the life you are meant to live?" />
                    <TextField name="surveyQ9" value={this.state.surveyQ9} onChange={this.handleChange} fullWidth multiline={true} label="What gives your life meaning?" />
                    <TextField name="surveyQ10" value={this.state.surveyQ10} onChange={this.handleChange} fullWidth multiline={true} label="Try your best to answer this question: who are you?" />
                </Grid>
                <Button color="inherit" onClick={this.handleFormSubmit}>Submit</Button>
            </Grid >
        );
    }
}

export default Survey;

// EXTRAS
// Validate form: all must be filled.