import React, { FormEvent } from "react";
import FormInput from "../../components/core/FormInput/FormInput";
import ModalBox from "../../components/containers/ModalBox/ModalBox";
import "./SignupComponent.css";
import {
  EmailLabel,
  FirstNameLabel,
  PasswordLabel,
  SignupAriaText,
  SignupHeadingHelpText,
  SignupHeadingText,
  SignupHelpText,
} from "./SignupComponent.strings";
import DualHeading from "../../components/DualHeading/DualHeading";
import ActionButton from "../../components/core/ActionButton/ActionButton";
import { useHistory } from "react-router-dom";

export default function SignupComponent() {
  const history = useHistory();
  function formSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    // TODO: clean the passing logic
    const name = ((event.target as HTMLFormElement)[0] as HTMLInputElement)
      .value;
    const email = ((event.target as HTMLFormElement)[1] as HTMLInputElement)
      .value;
    history.push({
      pathname: "/confirm",
      search: `?name=${name}&email=${email}`,
    });
  }
  return (
    <main className="signup-container">
      <ModalBox>
        <DualHeading
          helpText={SignupHeadingHelpText()}
          mainText={SignupHeadingText()}
        />
        <p className="subtext">{SignupHelpText()}</p>
        <form onSubmit={formSubmit}>
          <FormInput
            label={FirstNameLabel()}
            inputType="text"
            maxLength={25}
            isRequired
          />
          <FormInput
            label={EmailLabel()}
            inputType="email"
            maxLength={50}
            isRequired
          />
          <FormInput
            label={PasswordLabel()}
            inputType="password"
            maxLength={50}
            isRequired
          />
          <ActionButton
            isSubmitButton
            ariaLabel={SignupAriaText()}
            buttonText={SignupHeadingText()}
            buttonType="Primary"
          />
        </form>
      </ModalBox>
    </main>
  );
}
