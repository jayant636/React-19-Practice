import React, { useState } from "react";
import { z, ZodError } from "zod";

const ZodForm = () => {
  // step 1-------
  const initData = {
    email: "",
    password: "",
  };

  const [loginData, setLoginData] = useState(initData);

  const [errors, setErrors] = useState({});

  // step 2 ------
  const zodSchema = z.object({
    email: z.string().email("Not a valid email"),
    password: z
      .string()
      .min(4, "We need minimum 4 character")
      .max(8, "Max character should not exceed by 8"),
  });

  function onChangehandler(e) {
    e.preventDefault();
    setLoginData((prevData) => {
      return {
        ...prevData,
        [e.target.name]: e.target.value,
      };
    });
  }

  function submitHandler(e) {
    e.preventDefault();

    try {
      console.log(errors);

      // Step 3 --------------------
      const result = zodSchema.parse(loginData);
      setErrors({});
      // No more errors are here
    } catch (e) {
      if (e instanceof ZodError) {
        const newError = e.errors.reduce((acc, field) => {
          acc[field.path[0]] = field.message;
          return acc;
        }, {});
        setErrors(newError);
        console.log(newError);
      }
    }

    console.log(loginData);
  }

  return (
    <>
      <div>
        <form onSubmit={submitHandler}>
          <div>
            <label>
              Email
              <input
                type="text"
                name="email"
                value={loginData.email}
                placeholder="Enter email"
                onChange={onChangehandler}
              />
            </label>
          </div>
          {errors.email && <p>{errors.email}</p>}
          <br />

          <div>
            <label>
              Password
              <input
                type="password"
                name="password"
                placeholder="Enter Password"
                value={loginData.password}
                onChange={onChangehandler}
              />
            </label>
          </div>
          {errors.password && <p>{errors.password}</p>}

          <div>
            <button type="submit">Submit</button>
          </div>
        </form>
      </div>
    </>
  );
};

export default ZodForm;
