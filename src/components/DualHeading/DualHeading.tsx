import React from "react";
import "./DualHeading.css";

interface IDualHeadingProps {
  readonly helpText: string;
  readonly mainText: string;
}

export default function DualHeading(props: IDualHeadingProps) {
  return (
    <h2 className="dual-heading">
      {`${props.helpText} `}
      <strong>{props.mainText}</strong>
    </h2>
  );
}
