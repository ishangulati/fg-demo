import React from "react";
import "./ActionButton.css";

interface IActionButtonProps {
  readonly buttonType: "Primary" | "Secondary";
  readonly buttonText: string;
  readonly onClick?: () => void;
  readonly isSubmitButton?: boolean;
  readonly ariaLabel?: string;
}

export default function ActionButton(props: IActionButtonProps) {
  return (
    <div className="btn-container">
      <button
        className={`${
          props.buttonType === "Primary" ? "primary-btn" : "secondary-btn"
        } btn`}
        aria-label={props.ariaLabel || props.buttonText}
        type={props.isSubmitButton ? "submit" : "button"}
        onClick={() => {
          props.onClick && props.onClick();
        }}
      >
        {props.buttonText}
      </button>
    </div>
  );
}
