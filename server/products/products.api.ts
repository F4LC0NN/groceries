import { Router } from "express";

import { getAllProducts } from "./products.controllers";

const ProductsApi = Router();

ProductsApi.get("/", getAllProducts);

export default ProductsApi;
