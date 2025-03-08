import React from "react";
import CustomForm from "./CustomForm";
import { SIGN_IN_DATA } from "./Data";

const SignIn = () => {
  function submitHandler(data) {
    console.log(data);
  }

  return (
    <>
      <CustomForm config={SIGN_IN_DATA} onSubmit={submitHandler} />
    </>
  );
};

export default SignIn;
