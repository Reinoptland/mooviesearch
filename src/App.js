import React from "react";
import logo from "./logo.svg";
import "./App.css";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

function App() {
  return (
    <Router>
      <div className="App">
        <nav>
          <Link to="/">Home</Link>
          <Link to="/movies">Movies</Link>
        </nav>
        <header className="App-header">
          <Switch>
            <Route path="/movies">
              <h1>WATCH MOVIES MAN!</h1>
            </Route>
            <Route path="/">
              <h1>WELCOME TO MY APP, please stay a while</h1>
            </Route>
          </Switch>
        </header>
      </div>
    </Router>
  );
}

export default App;
