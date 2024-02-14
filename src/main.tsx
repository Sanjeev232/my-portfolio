import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import MoveToTop from "./View/MoveToTop";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <>
      <App />
      <MoveToTop />
    </>
  </React.StrictMode>
);
