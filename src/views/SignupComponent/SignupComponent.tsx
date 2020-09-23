import React, { useState } from "react";
import FormInput from "../../components/core/FormInput/FormInput";
import ModalBox from "../../components/containers/ModalBox/ModalBox";
import "./SignupComponent.css";
import { SignupHeadingText, SignupHelpText } from "./SignupComponent.strings";

export default function SignupComponent() {
  const [_showError] = useState(false);
  return (
    <main className="signup-container">
      <ModalBox>
        <h3>{SignupHeadingText()}</h3>
        <p>{SignupHelpText()}</p>
        <form>
          <FormInput
            label="First Name"
            inputType="text"
            maxLength={25}
            isRequired
            showError={_showError}
          />
          <FormInput
            label="Email"
            inputType="email"
            maxLength={50}
            isRequired
            showError={_showError}
          />
          <FormInput
            label="Password"
            inputType="password"
            maxLength={50}
            isRequired
            showError={_showError}
          />
        </form>
      </ModalBox>
    </main>
  );
}
