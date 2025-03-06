import React from "react";

const BasicForm = () => {
  function formHandler(formData) {
    const data = Object.fromEntries(formData);
    console.log(data);
  }

  return (
    <>
      <form action={formHandler}>
        <div>
          <label>
            FirstName
            <input type="text" placeholder="Enter Name" name="firstName" />
          </label>
        </div>

        <div>
          <label>
            LastName
            <input type="text" placeholder="Enter LastName" name="lastName" />
          </label>
        </div>

        <div>
          <label>
            Email
            <input type="text" placeholder="Enter Email" name="email" />
          </label>
        </div>

        <div>
          <label>
            Password
            <input
              type="password"
              placeholder="Enter Password"
              name="password"
            />
          </label>
        </div>

        <div>
          <label>
            Gender
            <label>
              Male
              <input type="checkbox" name="gender" value="male" />
            </label>
            <label>
              Female
              <input type="checkbox" name="gender" value="female" />
            </label>
          </label>
        </div>

        <div>
          <label>
            18+
            <label>
              Yes
              <input type="radio" name="age" value="yes" />
            </label>
            <label>
              No
              <input type="radio" name="age" value="no" />
            </label>
          </label>
        </div>

        <div>
          <button type="submit">Submit</button>
        </div>
      </form>
    </>
  );
};

export default BasicForm;
