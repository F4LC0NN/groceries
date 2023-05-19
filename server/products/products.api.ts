import { Router } from "express";

import {
    getAllProducts,
    getOneProduct,
    addProduct,
    deleteProduct,
} from "./products.controllers";

const ProductsApi = Router();

ProductsApi.get("/", getAllProducts);
ProductsApi.put("/products/:id", getOneProduct);
ProductsApi.post("/add", addProduct);
ProductsApi.delete("/delete/:id", deleteProduct);

export default ProductsApi;
