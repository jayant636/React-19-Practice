import React, { useState } from "react";

const Controlledforms = () => {
  const [formData, setFormData] = useState({
    userName: "",
    email: "",
    password: "",
  });

  function changeHandler(e) {
    e.preventDefault();
    setFormData((prevFormData) => {
      return {
        ...prevFormData,
        [e.target.name]: e.target.value,
      };
    });

    console.log(formData);
  }

  function submitHandler(submitData) {
    const data = Object.fromEntries(submitData);
    console.log(data);
  }

  return (
    <>
      <h4>Controlled Forms</h4>
      <form action={submitHandler}>
        <div>
          <label>
            Username
            <input
              type="text"
              name="userName"
              placeholder="Enter UserName"
              value={formData.userName}
              onChange={changeHandler}
            />
          </label>
        </div>

        <div>
          <label>
            Email
            <input
              type="text"
              placeholder="Enter Email"
              name="email"
              value={formData.email}
              onChange={changeHandler}
            />
          </label>
        </div>

        <div>
          <label>
            Password
            <input
              type="text"
              placeholder="Enter Password"
              name="password"
              value={formData.password}
              onChange={changeHandler}
            />
          </label>
        </div>

        <div>
          <button type="submit">Submit</button>
        </div>
      </form>
    </>
  );
};

export default Controlledforms;
