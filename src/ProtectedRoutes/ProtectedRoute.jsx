import React from "react";
import { Outlet } from "react-router";
import Login from "./Login";

const ProtectedRoute = () => {
  const isLoggedIn = true;

  if (isLoggedIn) return <Outlet />;

  return (
    <>
      <Login />
    </>
  );
};

export default ProtectedRoute;
