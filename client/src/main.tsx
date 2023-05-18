import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import ApiProvider from "@providers/ApiProvider.tsx";
import RoutesProvider from "@providers/RoutesProvider.tsx";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
    <React.StrictMode>
        <ApiProvider>
            <RoutesProvider />
        </ApiProvider>
    </React.StrictMode>
);
