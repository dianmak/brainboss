import React from "react";
import { Link } from "react-router-dom";
import { Grid, AppBar, Toolbar, Button, Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

const style = makeStyles(theme => ({
    root: { flexGrow: 1 },
    items: { flexGrow: 1 },
    login: {
        marginLeft: "4em",
        position: 'relative'
    },
    someButton: {
        marginLeft: "4em",
        marginRight: '4em'
    },
    aboutContact: {
        marginLeft: '20em'
    }
}));

function Navbar() {
    const classes = style();

    return (
        <AppBar className={classes.root} position="static">
            <Toolbar>
                <Typography variant="h6" className={classes.someButton}>
                    <Link to="/" >HOME </Link>
                </Typography>

                <Typography variant="h6" className={classes.someButton}>
                    <Link to="/workwithme" > WORK WITH ME </Link>
                </Typography>

                <Typography variant="h6" className={classes.aboutContact}>
                    <Link to="/about" > ABOUT & CONTACT </Link>
                </Typography>

                <Button color="inherit" className={classes.login}>Login</Button>

            </Toolbar>
        </AppBar >
    );
}

export default Navbar;