import React from "react";
import { Link } from "react-router-dom";
import logo from "../../logo.svg";
import "./HomeViewComponent.css";

export default function HomeViewComponent() {
  return (
    <header className="App-header">
      <img src={logo} className="App-logo" alt="logo" />
      <p>
        Edit <code>src/App.tsx</code> and save to reload.
      </p>
      <ul>
        <li></li>
      </ul>
      <Link className="App-link" to="/signup">
        Go to Sign Up!
      </Link>
    </header>
  );
}
