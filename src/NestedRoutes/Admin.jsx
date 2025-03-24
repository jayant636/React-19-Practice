import React from "react";
import { useNavigate } from "react-router";

const Admin = () => {
  const navigate = useNavigate();

  function submitHandler() {
    navigate("/dashboard/user");
  }

  return (
    <div>
      <p>Admin</p>
      <button onClick={submitHandler}>Go to User Component</button>
    </div>
  );
};

export default Admin;
