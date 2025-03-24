import React from "react";
import { useTheme } from "./CustomHook";

const CheckcustomHook = () => {
  const { theme, setTheme } = useTheme("dark");

  return (
    <>
      <div>{theme}</div>
      <div>
        <button
          onClick={() =>
            setTheme((prev) => (prev === "dark" ? "Light" : "dark"))
          }
        >
          Change Theme
        </button>
      </div>
    </>
  );
};

export default CheckcustomHook;
