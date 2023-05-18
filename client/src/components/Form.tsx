import { FormEventHandler } from "react";

export default function Form({
    submitHandler,
    form,
    setForm,
}: {
    submitHandler?: FormEventHandler;
    form?: any;
    setForm?: any;
}) {
    return (
        <div className="w-screen h-screen flex justify-center items-center bg-white">
            <form
                action="http://localhost:8000/add"
                method="POST"
                className="h-96 p-4 grid gap-6"
                onSubmit={submitHandler}
            >
                <h1 className="justify-self-center">Add product</h1>
                <div className="grid gap-1">
                    <label htmlFor="name" className="px-2">
                        Name
                    </label>
                    <input
                        type="text"
                        id="text"
                        name="name"
                        value={form.name}
                        onChange={(e) =>
                            setForm({ ...form!, name: e.target.value })
                        }
                        className="px-2 border-Grey3 rounded-md"
                    />
                </div>
                <div className="grid gap-1">
                    <label htmlFor="quantity" className="px-2">
                        Quantity
                    </label>
                    <input
                        type="number"
                        id="quantity"
                        name="quantity"
                        value={form.quantity}
                        onChange={(e) =>
                            setForm({
                                ...form,
                                quantity: e.target.value,
                            })
                        }
                        className="px-2 border-Grey3 rounded-md"
                    />
                </div>
                <div className="grid gap-1 mb-4">
                    <label htmlFor="details" className="px-2">
                        Details
                    </label>
                    <input
                        type="text"
                        id="text"
                        name="details"
                        value={form.details}
                        onChange={(e) =>
                            setForm({ ...form, details: e.target.value })
                        }
                        className="px-2 border-Grey3 rounded-md"
                    />
                </div>
                <div>
                    <button
                        type="submit"
                        className="w-full p-3 grid font-bold text-white rounded-md bg-Green4 shadow-md"
                    >
                        Add
                    </button>
                </div>
            </form>
        </div>
    );
}
