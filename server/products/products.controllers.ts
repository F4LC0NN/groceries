import { Request, Response } from "express";

import prisma from "../script";

async function getAllProducts(req: Request, res: Response) {
    let data = null;

    try {
        data = await prisma.product.findMany();
    } catch (error) {
        console.error(error);
        res.status(200).json({ error: error });
    }

    if (!data || data === null || data.length <= 0)
        return res.status(404).json({ info: "No products found", error: 404 });

    res.json(data);
}

async function addProduct(req: Request, res: Response) {
    const { name, quantity, details } = req.body;
    let data = null;

    try {
        data = await prisma.product.create({
            data: {
                name,
                quantity,
                details,
            },
        });
    } catch (error) {
        res.status(400).json({ info: "Could not add product", error: 400 });
    }

    if (!data || data === null || Object.keys(req.body).length === 0)
        return res.status(404).json({ info: "No products found", error: 404 });

    res.status(201).json(data);
}

export { getAllProducts, addProduct };
