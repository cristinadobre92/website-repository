import "bootstrap/dist/css/bootstrap.min.css";
import React from "react";
import "./App.css";
import Nav from "./components/Navigation";
import Professional from "./components/Professional";
import Personal from "./components/Personal";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Aintmuch from "./components/aintmuch.jpg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faGithub,
  faReact,
  faHtml5,
  faCss3,
} from "@fortawesome/free-brands-svg-icons";

function App() {
  return (
    <Router>
      <div className="App">
        <Nav />
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/professional" component={Professional} />
          <Route path="/personal" component={Personal} />
        </Switch>
      </div>
    </Router>
  );
}

const Home = () => (
  <div className="home-page">
    <div>
      <img src={Aintmuch} alt="Aint much but its honest work meme" />
    </div>
    <br />
    <div className="intro">
      <p>
        My name is Cristina Dobre, and this is my first project.
        <br /> I have used in here:
      </p>

      <ul className="prog">
        <li>
          <FontAwesomeIcon icon={faGithub} />
          <a href="https://github.com/">GitHub</a>
        </li>
        <br />
        <li>
          <FontAwesomeIcon icon={faReact} />
          <a href="https://reactjs.org/">React</a>
        </li>
        <br />
        <li>
          <FontAwesomeIcon icon={faHtml5} />
          <a href="https://www.w3schools.com/html/">HTML</a>
        </li>
        <br />
        <li>
          <FontAwesomeIcon icon={faCss3} />
          <a href="https://www.w3schools.com/css/">CSS</a>
        </li>
        <br />
      </ul>
    </div>
  </div>
);

export default App;
