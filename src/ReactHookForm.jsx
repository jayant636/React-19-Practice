import React, { useState } from "react";
import { useForm } from "react-hook-form";

const ReactHookForm = () => {
  function submitHandler(formData) {
    console.log(formData);
  }

  const {
    reset,
    register,
    handleSubmit,
    watch,

    formState: { isDirty, errors, isValid },
  } = useForm({
    defaultValues: {
      email: "abc@gmail.com",
      password: "1234",
    },
  });

  const isAdult = watch("isAdult");

  return (
    <>
      <h3>React Hook Form</h3>
      <form onSubmit={handleSubmit(submitHandler)}>
        <div>
          <label>
            Email
            <input
              type="text"
              {...register("email", {
                required: "Email is required",
                pattern: {
                  value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                  message: "invalid email address",
                },
              })}
            />
          </label>
          {errors.email && <p>{errors.email.message}</p>}
        </div>
        <br />
        <div>
          <label>
            Password
            <input
              type="text"
              {...register("password", {
                required: "Password is required",

                minLength: {
                  value: 4,
                  message: "Password is too short",
                },
              })}
            />
          </label>
          {errors.password && <p>{errors.password.message}</p>}
        </div>
        <div>
          <label>
            Are you 18+ ?
            <input type="checkbox" {...register("isAdult")} />
          </label>
          <br />
          {isAdult && (
            <label>
              Age:
              <input type="number" {...register("age")} />
            </label>
          )}
        </div>

        <div>
          {/* button will be disabled if it's not touched or not dirty */}
          <button disabled={!isDirty || !isValid} type="submit">
            Submit
          </button>
          <button
            type="reset"
            onChange={() =>
              reset({
                email: "",
                password: "",
              })
            }
          >
            Reset
          </button>
        </div>
      </form>
    </>
  );
};

export default ReactHookForm;
