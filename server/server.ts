import express from "express";
import cors from "cors";
import * as dotenv from "dotenv";

import ProductsApi from "./products/products.api";

dotenv.config();

const app = express();
const PORT = process.env.SERVER_PORT;

app.use(cors());
app.use(express.json());

app.use("/", ProductsApi);

app.listen(PORT, () => console.log(`App running on http://localhost:${PORT}`));

export default app;
