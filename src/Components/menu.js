import React from "react";
import "../CSS/menu.css";
import "../CSS/App.css";
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";
import Home from "./home";
import Waves from "./waves";
import altRock from "./alt.rock";

const popMenu = () => {
  var x = document.getElementById("myLinks");
  if (x.style.display === "block") {
    x.style.display = "none";
  } else {
    x.style.display = "block";
  }
};

export default function LongMenu() {
  return (
    <Router>
      <div>
        <Link
          href="https://fonts.googleapis.com/icon?family=Material+Icons"
          rel="stylesheet"
        />
        <div className="topnav">
          <Link className="active" to="/">
            <img
              src="https://dewey.tailorbrands.com/production/brand_version_mockup_image/556/2564213556_955a5b21-4b25-428d-8627-564d0813c794.png?cb=1579407840%27"
              alt="Astra Logo"
              className="responsive-img"
            />
          </Link>
          <div id="myLinks">
            <Link to="/">Home</Link>

            <Link to="/waves">Waves</Link>

            <Link to="/alt_rock">Alternative Rock</Link>
          </div>

          <button className="btn-flat" onClick={popMenu}>
            <i className="material-icons">menu</i>
          </button>
        </div>
        <Switch>
          <Route exact path="/" component={Home} />

          <Route exact path="/alt_rock" component={altRock} />
          <Route exact path="/waves" component={Waves} />
        </Switch>
      </div>
    </Router>
  );
}
