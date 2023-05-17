import ProductCard from "@components/ProductCard";
import ApiProviderContext from "@context/ApiProviderContext";
import { useContext } from "react";

export default function Products() {
    const { data } = useContext(ApiProviderContext);
    return (
        <>
            {data?.map((item) => (
                <ProductCard key={item.id} product={item} />
            ))}
        </>
    );
}
