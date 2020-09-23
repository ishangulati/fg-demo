import React from "react";
import { Link } from "react-router-dom";
import logo from "../../logo.svg";
import "./HomeViewComponent.css";

export default function HomeViewComponent() {
  return (
    <header className="App-header">
      <img src={logo} className="App-logo" alt="logo" />
      <p>
        Other than the challenge, taken up following 
      </p>
      <ul>
        <li>Bootstrapped the app from create-react-app</li>
        <li>Created Sample Folder structure</li>
        <li>Integrated Theming and RTL support</li>
        <li>Dummy localization support</li>
        <li>Basic Accessibility Checks</li>
      </ul>
      <Link className="App-link" to="/signup">
        Go to Sign Up!
      </Link>
    </header>
  );
}
