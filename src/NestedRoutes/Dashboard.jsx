import React from "react";
import { Link, Outlet, useLocation } from "react-router";

const Dashboard = () => {
  const location = useLocation();

  console.log(location.pathname);

  return (
    <>
      <div>Header of Dashboard</div>
      <br />
      <h2>Navigate to particular route using button</h2>

      <div>
        <Link to="admin">Admin</Link>
      </div>

      <br />
      <div>
        <Link to="user">User</Link>
      </div>
      <br />

      <p>Child Route :</p>
      <Outlet />
      <br />
      <div>Footer of Dashboard</div>
    </>
  );
};

export default Dashboard;
