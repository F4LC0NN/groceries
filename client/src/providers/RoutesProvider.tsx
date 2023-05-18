import { ReactNode } from "react";
import Routes from "@routes/Routes";

export default function RoutesProvider({ children }: { children?: ReactNode }) {
    return (
        <>
            <Routes />
            {children}
        </>
    );
}
