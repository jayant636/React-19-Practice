import React, { useContext } from "react";
import { ContextProvider } from "./ContextProvider";

const UseContext = () => {
  const contextValue = useContext(ContextProvider);

  return <div>{contextValue.name}</div>;
};

export default UseContext;
