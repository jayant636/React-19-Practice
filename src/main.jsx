import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

const rootelement = document.getElementById("root");
const rootDemo = createRoot(rootelement);

const client = new QueryClient();

rootDemo.render(
  <StrictMode>
    <QueryClientProvider client={client}>
      {" "}
      <App />
    </QueryClientProvider>
  </StrictMode>
);
