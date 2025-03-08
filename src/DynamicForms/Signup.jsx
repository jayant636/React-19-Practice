import React from "react";
import { CustomSignUp } from "./CustomSignUp";
import { SIGN_UP_DATA } from "./Data";

const SignUp = () => {
  function submitHandler(data) {
    console.log(data);
  }

  return (
    <>
      <h3>Sign up Form</h3>
      <div>
        <CustomSignUp config={SIGN_UP_DATA} onSubmit={submitHandler} />
      </div>
    </>
  );
};

export default SignUp;
