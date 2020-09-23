import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import "./App.css";
import RTLToggleSwitch from "./components/RTLToggleSwitch/RTLToggleSwitch";
import ThemeToggleSwitch from "./components/ThemeToggleSwitch/ThemeToggleSwitch";
import HomeViewComponent from "./components/views/HomeViewComponent";
import SignupComponent from "./components/views/SignupComponent";

function App() {
  return (
    <>
      <div className="App">
        <nav>
          <ThemeToggleSwitch />
          <RTLToggleSwitch />
        </nav>
        <Router>
          <Switch>
            <Route exact path="/">
              <HomeViewComponent />
            </Route>
            <Route path="/signup">
              <SignupComponent />
            </Route>
          </Switch>
        </Router>
      </div>
    </>
  );
}

export default App;
