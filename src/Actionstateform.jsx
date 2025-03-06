import React, { useActionState } from "react";

const Actionstateform = () => {
  const initState = {
    userName: "dummy1",
    lastName: "dummy2",
    email: "dummy3",
  };

  const [state, action, isPending] = useActionState(submitHandler, initState);

  function submitHandler(prevData, formData) {
    const data = Object.fromEntries(formData);
    console.log(prevData);
    console.log(data);

    return {};
  }

  return (
    <>
      <form action={action}>
        <h3>Forms using UseActionState Hook</h3>
        <div>
          <label>
            Username
            <input
              type="text"
              placeholder="Enter Name"
              name="userName"
              defaultValue={state.userName}
            />
          </label>
        </div>

        <div>
          <label>
            LastName
            <input
              type="text"
              name="lastName"
              placeholder="Enter LastName"
              defaultValue={state.lastName}
            />
          </label>
        </div>

        <div>
          <label>
            Email
            <input
              type="text"
              name="email"
              placeholder="Enter Email"
              defaultValue={state.email}
            />
          </label>
        </div>
        <div>
          <button disabled={isPending} type="submit">
            Submit
          </button>
        </div>
      </form>
    </>
  );
};

export default Actionstateform;
