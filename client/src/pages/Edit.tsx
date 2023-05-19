import { useContext, useEffect, useState } from "react";
import ApiProviderContext from "@context/ApiProviderContext";
import Form from "@components/Form";
import ProductInterface from "@interfaces/ProductInterface";
import { navigate } from "wouter/use-location";

export default function Edit({ id }: { id: string }) {
    const { data } = useContext(ApiProviderContext);

    const URL = `http://localhost:8000/products/${id}`;

    const [form, setForm] = useState({
        name: "",
        quantity: "1",
        details: "",
    });

    useEffect(() => {
        data?.map((item) => {
            if (item.id === parseInt(id)) {
                setForm({
                    ...form,
                    name: item.name!,
                    quantity: String(item.quantity),
                    details: item.details!,
                });
            }
        });
    }, []);

    async function editProduct(e: any) {
        e.preventDefault();

        if (
            form.name === "" ||
            form.details === "" ||
            parseInt(form.quantity) < 1
        )
            return;

        const formData: ProductInterface = {
            name: form.name,
            quantity: parseInt(form.quantity),
            details: form.details,
        };

        await fetch(URL, {
            method: "PUT",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(formData),
        });

        navigate("/", { replace: true });

        window.location.reload();
    }

    return (
        <Form
            action={URL}
            submitHandler={editProduct}
            form={form}
            setForm={setForm}
        />
    );
}
