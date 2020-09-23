import React, { PropsWithChildren } from "react";
import "./ModalBox.css";

export default function ModalBox(props: PropsWithChildren<{}>) {
  return <div className="modal-box">{props.children}</div>;
}
