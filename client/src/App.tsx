import LoadingPage from "@components/LoadingPage";
import ProductCard from "@components/ProductCard";
import useFetchApi from "@hooks/useFetchAPi";
import ProductInterface from "@interfaces/ProductInterface";

function App() {
    const { data, isLoading } = useFetchApi("http://localhost:8000");

    return (
        <div className="App">
            {isLoading ? (
                <LoadingPage />
            ) : (
                <>
                    {data.map((item: ProductInterface) => (
                        <ProductCard key={item.id} product={item} />
                    ))}
                </>
            )}
        </div>
    );
}

export default App;
