import { createContext } from "react";

import ProductInterface from "@interfaces/ProductInterface";

type ApiProviderValue = {
    data: ProductInterface[] | null;
    loading: boolean;
    error: string | null;
};

const ApiProviderContext = createContext<ApiProviderValue>({
    data: null,
    loading: false,
    error: null,
});

export default ApiProviderContext;
