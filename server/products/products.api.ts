import { Router } from "express";

import { getAllProducts, addProduct } from "./products.controllers";

const ProductsApi = Router();

ProductsApi.get("/", getAllProducts);
ProductsApi.post("/add", addProduct);

export default ProductsApi;
