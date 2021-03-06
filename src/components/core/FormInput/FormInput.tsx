import React from "react";
import "./FormInput.css";

interface IFormInputProps {
  readonly label: string;
  readonly inputType: "text" | "email" | "password";
  readonly maxLength: number;
  readonly isRequired: boolean;
}

export default function FormInput(props: IFormInputProps) {
  return (
    <label>
      <span className="label-text">{props.label}</span>
      <input
        className="input-box"
        type={props.inputType}
        maxLength={props.maxLength}
        required={!!props.isRequired}
      />
    </label>
  );
}
