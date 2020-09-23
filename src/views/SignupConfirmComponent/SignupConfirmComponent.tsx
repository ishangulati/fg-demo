import React from "react";
import ModalBox from "../../components/containers/ModalBox/ModalBox";
import DualHeading from "../../components/DualHeading/DualHeading";
import ActionButton from "../../components/core/ActionButton/ActionButton";
import "./SignupConfirmComponent.css";
import { SigninText, WelcomeText } from "./SignupConfirmComponent.strings";

export default function SignupConfirmComponent() {
  return (
    <main className="signup-confirm-container">
      <ModalBox>
        <DualHeading helpText={WelcomeText()} mainText={"John!"} />
        <p className="subtext">
          You have been registered for this awesome service. Please check your
          email listed below for instructions.
        </p>
        <p className="imp-text">johndoe@gmail.com</p>
        <ActionButton
          buttonText={SigninText()}
          onClick={() => {
            alert("Submit");
          }}
          buttonType="Primary"
        />
      </ModalBox>
    </main>
  );
}
