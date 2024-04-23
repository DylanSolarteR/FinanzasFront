import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
import { BrowserRouter } from "react-router-dom";
import { GlobalProvider } from "./context/globalContext";
import { Toaster } from "./components/ui/toaster";

ReactDOM.createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <GlobalProvider>
      <App />
      <Toaster />
    </GlobalProvider>
  </BrowserRouter>
);
