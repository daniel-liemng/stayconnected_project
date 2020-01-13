import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
// import "bootstrap/dist/css/bootstrap.min.css";
// import "bootstrap/dist/js/bootstrap.min.js";

import "./App.css";
import Home from "./pages/Home";
import About from "./pages/About";
import UserDetails from "./pages/UserDetails";
import Error from "./pages/Error";
import Navbar from "./components/Navbar";

function App() {
  return (
    <Router>
      <Navbar />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/about" component={About} />
        <Route path="/users/:id" component={UserDetails} />
        <Route component={Error} />
      </Switch>
    </Router>
  );
}

export default App;
