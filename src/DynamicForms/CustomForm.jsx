import React, { useState } from "react";
import InputForm from "./InputForm";

const CustomForm = ({ config, onSubmit }) => {
  // To set the initial value in the form
  const initData = config.reduce((acc, field) => {
    acc[field.name] = "";
    return acc;
  }, {});

  // To manage the input change handler

  const [data, setData] = useState(initData);

  function inputHandler(e) {
    e.preventDefault();
    const { name, value } = e.target;
    const newData = { ...data, [name]: value };
    setData(newData);
    console.log(data);
  }

  // To manage the submit handler
  function submitHandler(e) {
    e.preventDefault();
    onSubmit(data);
  }

  return (
    <>
      <form onSubmit={submitHandler}>
        {config.map((input) => {
          return (
            <InputForm
              key={input.id}
              value={data[input.name]}
              onChange={inputHandler}
              {...input}
            />
          );
        })}
        <button type="submit">Submit</button>
      </form>
    </>
  );
};

export default CustomForm;
