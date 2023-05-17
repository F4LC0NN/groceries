import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import ApiProvider from "@providers/ApiProvider.tsx";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
    <React.StrictMode>
        <ApiProvider>
            <App />
        </ApiProvider>
    </React.StrictMode>
);
