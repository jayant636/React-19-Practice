import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App";

const rootelement = document.getElementById("root");
const rootDemo = createRoot(rootelement);

rootDemo.render(
  <StrictMode>
    <App />
  </StrictMode>
);
