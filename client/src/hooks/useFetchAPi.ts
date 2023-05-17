import { useState, useEffect } from "react";

export default function useFetchApi(apiURL: string) {
    const [data, setData] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    async function fetchApi() {
        setIsLoading((_prev) => (_prev = true));

        const response = await fetch(apiURL);
        const api = await response.json();
        setData((_prev) => (_prev = api));

        setIsLoading((_prev) => (_prev = false));
    }

    useEffect(() => {
        fetchApi()
            .then((r) => r)
            .catch((err) => console.error(err));
    }, []);

    return {
        data,
        isLoading,
    };
}
