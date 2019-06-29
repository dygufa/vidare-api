import { Request, Response } from "express";
import { BloodDonationModel } from "../models";
import { expressError } from "../utils";
import * as moment from "moment";

export const getBloodDonations = async (req: Request, res: Response) => {
    const userId = req.user!.id;
    const vouchers = await BloodDonationModel.find({
        userId,
    });
    res.json({
        ok: true,
        data: vouchers
    });
}

export const postBloodDonations = async (req: Request, res: Response) => {
    const productId = req.body.productId;
    const userId = req.user!.id;

    if (!productId) expressError(res, "productId is not defined");

    const newVoucher = await BloodDonationModel.create({
        productId,
        expiresAt: moment().add(1, "month").toDate(),
        createdAt: new Date(),
        userId,
    });

    res.json({
        ok: true,
        data: newVoucher
    });
}