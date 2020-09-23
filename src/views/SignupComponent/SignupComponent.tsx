import React, { useState } from "react";
import FormInput from "../../components/core/FormInput/FormInput";
import ModalBox from "../../components/containers/ModalBox/ModalBox";
import "./SignupComponent.css";
import {
  EmailLabel,
  FirstNameLabel,
  PasswordLabel,
  SignupHeadingHelpText,
  SignupHeadingText,
  SignupHelpText,
} from "./SignupComponent.strings";
import DualHeading from "../../components/DualHeading/DualHeading";
import ActionButton from "../../components/core/ActionButton/ActionButton";

export default function SignupComponent() {
  const [_showError] = useState(false);
  return (
    <main className="signup-container">
      <ModalBox>
        <DualHeading
          helpText={SignupHeadingHelpText()}
          mainText={SignupHeadingText()}
        />
        <p className="subtext">{SignupHelpText()}</p>
        <form>
          <FormInput
            label={FirstNameLabel()}
            inputType="text"
            maxLength={25}
            isRequired
            showError={_showError}
          />
          <FormInput
            label={EmailLabel()}
            inputType="email"
            maxLength={50}
            isRequired
            showError={_showError}
          />
          <FormInput
            label={PasswordLabel()}
            inputType="password"
            maxLength={50}
            isRequired
            showError={_showError}
          />
          <ActionButton
            buttonText={SignupHeadingText()}
            onClick={() => {
              alert("Submit");
            }}
            buttonType="Primary"
          />
        </form>
      </ModalBox>
    </main>
  );
}
