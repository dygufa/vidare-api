import { Request, Response } from "express";
import { ProductModel, VoucherModel } from "../models";
import { expressError } from "../utils";
import * as moment from "moment";
import * as randomstring from "randomstring";

export const getVouchers = async (req: Request, res: Response) => {
    const userId = req.user!.id;
    const vouchers = await VoucherModel.find({
        userId,
    });
    res.json({
        ok: true,
        data: vouchers
    });
}

export const postVoucher = async (req: Request, res: Response) => {
    const productId = req.body.productId;
    const userId = req.user!.id;

    if (!productId) expressError(res, "productId is not defined");

    const newVoucher = await VoucherModel.create({
        productId,
        expiresAt: moment().add(1, "month").toDate(),
        createdAt: new Date(),
        userId,
        code: randomstring.generate(8) // TODO: verify colision
    });

    res.json({
        ok: true,
        data: newVoucher
    });
}