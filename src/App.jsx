import React, { useState } from "react";
import Header from "./Header";
import UseReducer from "./Hooks/UseReducer";
import UseEffect from "./Hooks/UseEffect";
import UseRef from "./Hooks/UseRef";
import UseContext from "./Hooks/UseContext";
import { ContextProvider } from "./Hooks/ContextProvider";
import CheckcustomHook from "./Hooks/CustomHook/CheckcustomHook";
import { BrowserRouter, Route, Routes } from "react-router";
import Footer from "./Footer";
import Admin from "./NestedRoutes/Admin";
import User from "./NestedRoutes/User";
import Dashboard from "./NestedRoutes/Dashboard";
import DashboardHome from "./NestedRoutes/DashboardHome";

const App = () => {
  const [name, setName] = useState({ name: "Paras" }); // For using useContext hook

  return (
    <BrowserRouter>
      <Routes>
        <Route path="" element={<Header />} />
        <Route path="footer" element={<Footer />} />
        <Route path="about" element={<p>About Page</p>} />
        <Route path="*" element={<p>404 Not Found</p>} />

        {/* Nested routing  */}
        <Route path="dashboard" element={<Dashboard />}>
          <Route index element={<DashboardHome />} />
          <Route path="admin" element={<Admin />} />
          <Route path="user" element={<User />} />
        </Route>
      </Routes>

      {/* <ContextProvider.Provider value={name}>
        <UseContext />
        <CheckcustomHook />
      </ContextProvider.Provider> */}
    </BrowserRouter>
  );
};

export default App;
