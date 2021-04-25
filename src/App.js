import React from "react";
import "./styles.css";
import Home from "./components/Home";
import About from "./components/About";
import Header from "./components/Header";

import Blogs from "./components/Blogs";
import Quiz from "./components/Quiz";
import Learn from "./components/Learn";
import Interview from "./components/Interview";
import Galary from "./components/Gallery";

import { Route, Switch } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";




const useStyles = makeStyles({});

export default function App() {
  const classes = useStyles();
  return (
    <div className={classes.container}>
      <Header />
      <Switch>
        <Route exact from="/" render={props => <Home {...props} />} />
        <Route exact path="/blogs" render={props => <Blogs {...props} />} />
        <Route exact path="/quiz" render={props => <Quiz {...props} />} />
        <Route exact path="/learn" render={props => <Learn {...props} />} />
        <Route exact path="/interview" render={props => <Interview {...props} />} />
        <Route exact path="/galary" render={props => <Galary {...props} />} />
        <Route exact path="/about" render={props => <About {...props} />} />

      </Switch>
    </div>
  );
}