import { useState } from "react";
import { motion } from "framer-motion";

import ProductInterface from "@interfaces/ProductInterface";

import { STYLES, VARIANTS } from "@utils/productCardUtils";
import { useLocation } from "wouter";

export default function ProductCard({
    product,
}: {
    product: ProductInterface;
}) {
    const [showDetails, setShowDetais] = useState(false);
    const [checked, setChecked] = useState(false);

    const [_, navigate] = useLocation();

    async function deleteProduct() {
        await fetch(`http://localhost:8000/delete/${product.id}`, {
            method: "DELETE",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ id: product.id }),
        });
    }

    return (
        <div className="overflow-y-scroll" data-productid={product.id}>
            <motion.div
                className={checked ? STYLES.card.open : STYLES.card.closed}
            >
                <div
                    className={STYLES.cardTextContainer}
                    onClick={() => setShowDetais((_prev) => (_prev = !_prev))}
                >
                    <motion.p
                        initial={false}
                        animate={checked ? "open" : "closed"}
                        variants={VARIANTS.cardText}
                    >
                        {product.name}
                    </motion.p>
                    <motion.p
                        initial={false}
                        animate={checked ? "open" : "closed"}
                        variants={VARIANTS.cardText}
                    >
                        {product.quantity}
                    </motion.p>
                    <motion.svg
                        width="10"
                        height="9"
                        viewBox="0 0 10 9"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                        animate={showDetails ? "open" : "closed"}
                        variants={VARIANTS.arrow}
                    >
                        <motion.path
                            d="M4.13397 8.42838C4.51887 9.09504 5.48113 9.09504 5.86603 8.42837L9.33013 2.42838C9.71503 1.76171 9.2339 0.928375 8.4641 0.928375H1.5359C0.766098 0.928375 0.284973 1.76171 0.669873 2.42838L4.13397 8.42838Z"
                            animate={checked ? "open" : "closed"}
                            variants={VARIANTS.arrowPath}
                        />
                    </motion.svg>
                </div>
                <div className={STYLES.checkboxContainer}>
                    <input
                        type="checkbox"
                        className={STYLES.checkbox}
                        onClick={() => setChecked((_prev) => (_prev = !_prev))}
                    />
                </div>
            </motion.div>
            <motion.div
                className={STYLES.cardDetails}
                initial={false}
                animate={showDetails ? "open" : "closed"}
                variants={VARIANTS.cardDetails}
            >
                <ul className="p-4">
                    {product.details?.split(", ").map((item) => (
                        <li key={item}>{item}</li>
                    ))}
                </ul>
                <div className={STYLES.cardDetailsButtonContainer}>
                    <button
                        className={STYLES.cardDetailsEditButton}
                        onClick={() => {
                            navigate(`/edit/${product.id}`);
                        }}
                    >
                        Edit
                    </button>
                    <button
                        className={STYLES.cardDetailsDeleteButton}
                        onClick={() => {
                            deleteProduct();
                            navigate("/", { replace: true });
                            window.location.reload();
                        }}
                    >
                        Delete
                    </button>
                </div>
            </motion.div>
        </div>
    );
}
