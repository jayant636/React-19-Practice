import React, { useState } from "react";
import InputForm from "./InputForm";

export const CustomSignUp = ({ config, onSubmit }) => {
  const initData = config.reduce((acc, field) => {
    acc[field.name] = "";
    return acc;
  }, {});

  const [signUpData, setSignupData] = useState(initData);

  function onChangeHandler(e) {
    const { name, value } = e.target;
    const newData = { ...signUpData, [name]: value };
    setSignupData(newData);
    console.log(signUpData);
  }

  function submitHandler(e) {
    e.preventDefault();
    onSubmit(signUpData);
  }

  return (
    <>
      <form onSubmit={submitHandler}>
        {config.map((signUp) => {
          return (
            <InputForm
              {...signUp}
              key={signUp.id}
              onChange={onChangeHandler}
              value={signUpData[signUp.name]}
            />
          );
        })}
        <button type="submit">Submit</button>
      </form>
    </>
  );
};
