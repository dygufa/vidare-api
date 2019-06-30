import { Request, Response } from "express";
import { ProductModel } from "../models";

export const getProducts = async (req: Request, res: Response) => {
    const products = await ProductModel.find().populate("company");
    res.json({
        ok: true,
        data: products
    });
}

export const getProduct = async (req: Request, res: Response) => {
    const productId = req.params.id;
    const product = await ProductModel.findById(productId).populate("company");
    res.json({
        ok: true,
        data: product
    });
}