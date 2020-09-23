import React from "react";
import ModalBox from "../../components/containers/ModalBox/ModalBox";
import DualHeading from "../../components/DualHeading/DualHeading";
import ActionButton from "../../components/core/ActionButton/ActionButton";
import "./SignupConfirmComponent.css";
import {
  SigninHelpText,
  SigninText,
  WelcomeText,
} from "./SignupConfirmComponent.strings";
import { useHistory } from "react-router-dom";

export default function SignupConfirmComponent() {
  const history = useHistory();

  // TODO: clean the logic, move keys to constants
  const params = new URLSearchParams(history.location.search);
  const name = params.get("name");
  const email = params.get("email");

  return (
    <main className="signup-confirm-container">
      <ModalBox>
        <DualHeading helpText={WelcomeText()} mainText={`${name}!`} />
        <p className="subtext">{SigninHelpText()}</p>
        <p className="imp-text">{email}</p>
        <ActionButton
          buttonText={SigninText()}
          onClick={() => {
            history.push("/");
          }}
          buttonType="Primary"
        />
      </ModalBox>
    </main>
  );
}
