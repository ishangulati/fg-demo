import React, { useState } from "react";
import "./ToggleSwitch.css";

interface IToggleSwitchProps {
  readonly onToggle: (val: boolean) => void;
  readonly initValue?: boolean;
  readonly text: string;
}

export default function ToggleSwitch(props: IToggleSwitchProps) {
  const [currentValue, setValue] = useState(!!props.initValue);
  function _onToggle() {
    // using value before changing state
    props.onToggle(!currentValue);
    setValue(!currentValue);
  }
  // change to custom element
  return (
    <label className="toggle-switch">
      {props.text}:
      <span className="switch">
        <input type="checkbox" onChange={_onToggle} checked={currentValue} />
        <span className="slider round"></span>
      </span>
    </label>
  );
}
