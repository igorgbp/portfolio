import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
import {ThemeProvider} from './context/theme/themeContext'
import {GeralProvider} from './context/geral/geralContext'
import {themeData} from './context/theme/values'
import {geralData} from './context/geral/values'

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <GeralProvider>
        <App />
    </GeralProvider>
  </React.StrictMode>
);
