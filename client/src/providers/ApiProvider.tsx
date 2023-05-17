import { ReactNode, Suspense } from "react";
import useFetchApi from "@hooks/useFetchAPi";
import ApiProviderContext from "@context/ApiProviderContext";
import LoadingPage from "@components/LoadingPage";

export default function ApiProvider({ children }: { children: ReactNode }) {
    const { data, loading, error } = useFetchApi("http://localhost:8000");
    return (
        <ApiProviderContext.Provider value={{ data, loading, error }}>
            <Suspense>{loading ? <LoadingPage /> : <>{children}</>}</Suspense>
        </ApiProviderContext.Provider>
    );
}
