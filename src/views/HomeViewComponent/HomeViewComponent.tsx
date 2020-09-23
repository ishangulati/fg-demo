import React from "react";
import { Link } from "react-router-dom";
import logo from "../../logo.svg";
import "./HomeViewComponent.css";

export default function HomeViewComponent() {
  return (
    <header className="App-header">
      <img src={logo} className="App-logo" alt="logo" />
      <p>Pointers around working on this app:</p>
      <ul>
        <li>Bootstrapped this app from create-react-app</li>
        <li>Created Sample Folder hierarchy</li>
        <li>Integrated Theming using CSS variables</li>
        <li>Localization support by instantiating localeObject</li>
        <li>Added basic a11y Labels</li>
        <li>Engagement telemetry using dispatchLog</li>
      </ul>
      <p>Pending Items:</p>
      <ul>
        <li>Unit Tests/Storybook Tests</li>
        <li>Hooking mock API and loaders</li>
        <li>Perf telemetry</li>
      </ul>
      <Link className="App-link" to="/signup">
        Go to Sign Up!
      </Link>
    </header>
  );
}
