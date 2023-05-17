import { Request, Response } from "express";

import prisma from "../script";

async function getAllProducts(req: Request, res: Response) {
    let data = null;

    try {
        data = await prisma.product.findMany();
    } catch (error) {
        console.error(error);
        res.json({ error: error });
    }

    if (!data || data == null || data.length <= 0)
        return res.status(404).json({ info: "No products found", error: 404 });

    res.json(data);
}

export { getAllProducts };
