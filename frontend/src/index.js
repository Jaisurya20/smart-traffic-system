import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { TrafficProvider } from "./context/TrafficContext";

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <TrafficProvider>
    <App />
  </TrafficProvider>
);