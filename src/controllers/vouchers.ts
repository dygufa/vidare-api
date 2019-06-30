import { Request, Response } from "express";
import { ProductModel, VoucherModel, UserModel } from "../models";
import { expressError } from "../utils";
import * as moment from "moment";
import * as randomstring from "randomstring";

export const getVouchers = async (req: Request, res: Response) => {
    const userId = req.user!.id;
    const vouchers = await VoucherModel.find({
        user: userId,
    }).populate("product");

    res.json({
        ok: true,
        data: vouchers
    });
}

export const redeem = async (req: Request, res: Response) => {
    const code = req.user!.id;
    await VoucherModel.update(
        {
            code
        }, {
            used: true
        }
    );

    res.json({
        ok: true,
        data: true
    });
}

export const postVoucher = async (req: Request, res: Response) => {
    const productId = req.body.productId;
    const userId = req.user!.id;

    if (!productId) {
        expressError(res, "productId is not defined");
        return;
    }

    const user = await UserModel.findById(userId);
    const product = await ProductModel.findById(productId);

    if (!user || !product) {
        expressError(res, "user or product not found");
        return;
    }

    if (product.points > user.points) {
        expressError(res, "Infelizmente você não tem pontos suficientes. :(");
        return;
    }

    const newVoucher = await VoucherModel.create({
        product: productId,
        expiresAt: moment().add(1, "month").toDate(),
        createdAt: new Date(),
        user: userId,
        used: false,
        code: randomstring.generate({ length: 6, charset: "alphanumeric", capitalization: "uppercase" }) // TODO: verify colision
    });

    await UserModel.update(
        {
            _id: userId
        },
        {
            $inc: {
                points: product.points * -1
            }
        }
    );

    const voucher = await VoucherModel.findById(newVoucher._id).populate("product");

    res.json({
        ok: true,
        data: voucher
    });
}