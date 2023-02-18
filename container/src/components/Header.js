import React from "react";
import AppBar from "@material-ui/core/AppBar";
import Button from "@material-ui/core/Button";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import { Link as RouterLink } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
  "@global": {
    ul: {
      margin: 0,
      padding: 0,
      listStyle: "none",
    },
    a: {
      textDecoration: "none",
    },
  },
  appBar: {
    borderBottom: `1px solid ${theme.palette.divider}`,
  },
  
  toolbar: {
    flexWrap: "wrap",
    justifyContent: "space-between",
  },
  link: {
    margin: theme.spacing(1, 1.5),
  },
  
  footer: {
    borderTop: `1px solid ${theme.palette.divider}`,
    marginTop: theme.spacing(0),
    paddingTop: theme.spacing(2),
    paddingBottom: theme.spacing(1),
    [theme.breakpoints.up("sm")]: {
      paddingTop: theme.spacing(0),
      paddingBottom: theme.spacing(0),
    },
  },
}));

export default function Header({ isSignedIn, onSignOut }) {
  const classes = useStyles();

  const onClick = () => {
    if (isSignedIn && onSignOut) {
      onSignOut();
    }
  };

  return (
    <React.Fragment>
      <AppBar 
        position="static"
        color="default"
        elevation={0}
        className={classes.appBar}
      >
        <Toolbar className={classes.toolbar}>
          <Typography
            variant="h6"
            color="inherit"
            noWrap
            component={RouterLink}
            to="/"
          >
           Verra Moblity Portal
          </Typography>
          <Typography
            color="inherit"
            variant="h15"
            className={classes.link}
            component={RouterLink}
            to={isSignedIn ? "/" : "/auth/signin"}
            onClick={onClick}
          >
            {isSignedIn ? "Logout" : "verramoblity"}
          </Typography>
        </Toolbar>
      </AppBar>
    </React.Fragment>
  );
}
