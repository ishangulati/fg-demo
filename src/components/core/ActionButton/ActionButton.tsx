import React from "react";
import "./ActionButton.css";

interface IActionButtonProps {
  readonly buttonType: "Primary" | "Secondary";
  readonly buttonText: string;
  readonly onClick: () => void;
  readonly isSubmitButton?: boolean;
}

export default function ActionButton(props: IActionButtonProps) {
  return (
    <button
      className={`${
        props.buttonType === "Primary" ? "primary-btn" : "secondary-btn"
      } btn`}
      type={props.isSubmitButton ? "submit" : "button"}
      onClick={props.onClick}
    >
      {props.buttonText}
    </button>
  );
}
