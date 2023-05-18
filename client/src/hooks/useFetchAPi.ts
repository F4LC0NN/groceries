import { useState, useEffect } from "react";
import ProductInterface from "@interfaces/ProductInterface";

export default function useFetchApi(apiURL: string, options: {} = {}) {
    const [data, setData] = useState<ProductInterface[] | null>(null);
    const [loading, setLoading] = useState<boolean>(true);
    const [error, setError] = useState<string | null>(null);

    async function fetchApi() {
        try {
            const response = await fetch(apiURL, options);
            const api = await response.json();
            setData((_prev) => (_prev = api));
        } catch (error: any) {
            setError((_prev) => (_prev = error.message));
        } finally {
            setLoading((_prev) => (_prev = false));
        }
    }

    useEffect(() => {
        fetchApi();
    }, []);

    return {
        data,
        loading,
        error,
    };
}
