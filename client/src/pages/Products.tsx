import FloatingButton from "@components/FloatingButton";
import ProductCard from "@components/ProductCard";
import ApiProviderContext from "@context/ApiProviderContext";
import ProductInterface from "@interfaces/ProductInterface";
import { useContext } from "react";
import { navigate } from "wouter/use-location";

export default function Products() {
    const { data } = useContext(ApiProviderContext);

    return (
        <>
            <div className="mb-16">
                {data?.length === undefined ? (
                    <div className="h-screen flex flex-col justify-center items-center border-2">
                        <svg
                            width="49"
                            height="49"
                            viewBox="0 0 49 49"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path
                                d="M48.4827 45.4319L6.33226 3.28146L4.70622 1.65542L3.16465 0.113842L0.482727 2.79576L9.75329 12.0663L14.4203 21.9071L11.5694 27.0808C11.2315 27.6721 11.0415 28.369 11.0415 29.1081C11.0415 31.431 12.942 33.3316 15.265 33.3316H31.0186L33.9328 36.2458C33.2077 36.7657 32.6661 37.5021 32.386 38.3492C32.1059 39.1963 32.1017 40.1104 32.3739 40.9601C32.6462 41.8097 33.1809 42.5512 33.9012 43.0777C34.6215 43.6042 35.4902 43.8888 36.3824 43.8903C37.7973 43.8903 39.0432 43.1935 39.8034 42.1165L45.8008 48.1138L48.4827 45.4319ZM16.1519 29.1081C15.8562 29.1081 15.6239 28.8758 15.6239 28.5802L15.6873 28.3268L17.5879 24.8846H22.5716L26.7951 29.1081H16.1519ZM33.3204 24.8846C34.9042 24.8846 36.2979 24.0188 37.0159 22.7095L44.576 9.0043C44.7502 8.68201 44.8379 8.32005 44.8304 7.95376C44.8229 7.58748 44.7206 7.22939 44.5333 6.91449C44.3461 6.59958 44.0804 6.33863 43.7621 6.15712C43.4439 5.97561 43.084 5.87976 42.7177 5.87891H14.2935L33.3204 24.8846ZM15.265 35.4434C12.942 35.4434 11.0626 37.3439 11.0626 39.6669C11.0626 41.9898 12.942 43.8903 15.265 43.8903C17.5879 43.8903 19.4884 41.9898 19.4884 39.6669C19.4884 37.3439 17.5879 35.4434 15.265 35.4434Z"
                                fill="#A5A7A550"
                            />
                        </svg>

                        <p className="font-bold text-Grey2 opacity-50">
                            Oops, empty cart!
                        </p>
                    </div>
                ) : (
                    data?.map((item: ProductInterface) => (
                        <ProductCard key={item.id} product={item} />
                    ))
                )}
            </div>
            <FloatingButton handler={() => navigate("/create")} />
        </>
    );
}
