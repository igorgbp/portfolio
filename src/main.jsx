import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
import {GeralProvider} from './context/geral/geralContext'

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <GeralProvider>
        <App />
    </GeralProvider>
  </React.StrictMode>
);
