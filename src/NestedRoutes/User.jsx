import React from "react";
import { useNavigate } from "react-router";

const User = () => {
  const navigate = useNavigate();

  function submitHandler() {
    navigate("/dashboard/admin");
  }

  return (
    <div>
      <p>User</p>
      <button onClick={submitHandler}>Go to Admin Dashboard</button>
    </div>
  );
};

export default User;
