import { useState } from "react";
import { useLocation } from "wouter";
import ProductInterface from "@interfaces/ProductInterface";
import Form from "@components/Form";

export default function Create() {
    const [form, setForm] = useState({
        name: "",
        quantity: "1",
        details: "",
    });

    const URL = "http://localhost:8000/add";

    const [_, navigate] = useLocation();

    async function addProduct(event: any) {
        event.preventDefault();

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
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(formData),
        });

        navigate("/", { replace: true });

        window.location.reload();
    }
    return (
        <Form
            action={URL}
            submitHandler={addProduct}
            form={form}
            setForm={setForm}
        />
    );
}
