import { Request, Response } from "express";
import { ProductModel } from "../models";

export const getProducts = async (req: Request, res: Response) => {
    const products = await ProductModel.find();
    res.json({
        ok: true,
        data: products
    });
}