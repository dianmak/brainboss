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


    // handleChange = e => {
    //     const { name, value } = e.target;
    //     this.setState({
    //         [name]: value
    //     });
    //     console.log("jere");
    //     console.log(this.state);
    // }

    handleFormSubmit = e => {
        e.preventDefault();
        const answers = [];

        for (let i = 1; i < 11; i++) {
            answers.push(document.getElementById("surveyQ" + i).value);
        }
        console.log(answers);
        this.props.handleFormSubmit(answers).then(() => this.props.history.push("/beintouch"));
    }

    render() {
        //const classes = this.surveyStyles();
        return (

            <Grid container alignItems="center" justify="center" alignContent="center" direction="column" >
                <h1>Hello from Survey</h1>

                <Grid item md={10}>
                    <TextField id="surveyQ1" fullWidth multiline={true} label="Why are you interested in coaching?" />
                    <TextField id="surveyQ2" fullWidth multiline={true} label="What do you hope to accomplish with coaching?" />
                    <TextField id="surveyQ3" fullWidth multiline={true} label="Are you willing to try all the exercises and homework? (Especially the ones you have resistance to?)" />
                    <TextField id="surveyQ4" fullWidth multiline={true} label="What is your biggest fear in life?" />
                    <TextField id="surveyQ5" fullWidth multiline={true} label="What are five major positive events in your life?" />
                    <TextField id="surveyQ6" fullWidth multiline={true} label="What are five major negative events in your life?" />
                    <TextField id="surveyQ7" fullWidth multiline={true} label="What do you most want to change in your life?" />
                    <TextField id="surveyQ8" fullWidth multiline={true} label="Do you believe you are living the life you are meant to live?" />
                    <TextField id="surveyQ9" fullWidth multiline={true} label="What gives your life meaning?" />
                    <TextField id="surveyQ10" fullWidth multiline={true} label="Try your best to answer this question: who are you?" />
                </Grid>
                <Button color="inherit" onClick={this.handleFormSubmit}>Submit</Button>
            </Grid >
        );
    }
}

export default Survey;

// EXTRAS
// Validate form: all must be filled.