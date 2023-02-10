import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";

import App from "./App";
import { StyledGlobalReset } from "./styles/globalReset";
import { StyledGlobalStyle } from "./styles/globalStyles";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <StyledGlobalReset/>
    <StyledGlobalStyle/>
    
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>
);
