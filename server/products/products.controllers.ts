import { Request, Response } from "express";

import prisma from "../script";

async function getAllProducts(req: Request, res: Response) {
    let data = null;

    try {
        data = await prisma.product.findMany();
    } catch (error) {
        console.error(error);
        res.status(404).json({ error: error });
    }

    if (!data || data === null || data.length <= 0)
        return res.status(404).json({ info: "No products found", error: 404 });

    res.status(200).json(data);
}

async function getOneProduct(req: Request, res: Response) {
    let data = null;

    const id = parseInt(req.params.id);
    const { name, quantity, details } = req.body;

    try {
        data = await prisma.product.update({
            where: {
                id: id,
            },
            data: {
                name,
                quantity,
                details,
            },
        });
    } catch (error) {
        console.log(error);
        res.status(404).json({ error: error });
    }

    if (!data || data === null)
        return res.status(404).json({ info: "No product found", error: 404 });

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
        return res.status(400).json({
            info: "Not enough information to add a product",
            error: 400,
        });

    res.status(302).redirect("http://localhost:5173");
}

async function deleteProduct(req: Request, res: Response) {
    const id = parseInt(req.params.id);
    let data = null;

    try {
        data = await prisma.product.delete({
            where: {
                id: id,
            },
        });
    } catch (error) {
        res.status(400).json({ info: "Could not delete product", error: 400 });
    }

    if (!data || data === null || Object.keys(req.body).length === 0)
        return res.status(400).json({
            info: "Could not delete a product",
            error: 400,
        });
}

export { getAllProducts, getOneProduct, addProduct, deleteProduct };
