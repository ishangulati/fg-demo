import React from "react";
import ToggleSwitch from "../core/ToggleSwitch/ToggleSwitch";
import toggleDarkMode from "../../theme/toggleDarkMode";

const strModeKey = "_isDarkMode";
// initializing theme variables!
toggleDarkMode(localStorage.getItem(strModeKey) === "y");

export default function ThemeToggleSwitch() {
  function _onToggle(v: boolean) {
    localStorage.setItem(strModeKey, v ? "y" : "n");
    toggleDarkMode(v);
  }
  return (
    <ToggleSwitch
      text={"Dark Theme"}
      initValue={localStorage.getItem(strModeKey) === "y"}
      onToggle={_onToggle}
    />
  );
}
