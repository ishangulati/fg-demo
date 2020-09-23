import React from "react";
import toggleRTL from "../../localization/toggleRTL";
import ToggleSwitch from "../core/ToggleSwitch/ToggleSwitch";

const strRtlKey = "_isRTL";
// initializing theme RTL mode!
toggleRTL(localStorage.getItem(strRtlKey) === "y");

export default function RTLToggleSwitch() {
  function _onToggle(v: boolean) {
    localStorage.setItem(strRtlKey, v ? "y" : "n");
    toggleRTL(v);
  }
  return (
    <div>
      <ToggleSwitch
        text={"RTL"}
        initValue={localStorage.getItem(strRtlKey) === "y"}
        onToggle={_onToggle}
      />
    </div>
  );
}
