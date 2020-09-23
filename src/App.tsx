import React from "react";
import "./App.css";
import { HashRouter as Router, Switch, Route } from "react-router-dom";
import RTLToggleSwitch from "./components/RTLToggleSwitch/RTLToggleSwitch";
import ThemeToggleSwitch from "./components/ThemeToggleSwitch/ThemeToggleSwitch";
import HomeViewComponent from "./views/HomeViewComponent/HomeViewComponent";
import SignupComponent from "./views/SignupComponent";

function App() {
  return (
    <>
      <nav className="NavControls">
        <ThemeToggleSwitch />
        <RTLToggleSwitch />
      </nav>
      <div className="App">
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
