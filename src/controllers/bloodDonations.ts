import { Request, Response } from "express";
import { BloodDonationModel, UserModel } from "../models";
import { expressError } from "../utils";
import * as moment from "moment";
import * as cdn from "../cdn";

export const getBloodDonations = async (req: Request, res: Response) => {
    const userId = req.user!.id;
    const vouchers = await BloodDonationModel.find({
        user: userId,
    });
    res.json({
        ok: true,
        data: vouchers
    });
}

export const postBloodDonations = async (req: Request, res: Response) => {
    const image = req.body.image;
    const userId = req.user!.id;
    if (!image) {
        expressError(res, "image is not defined");
        return;
    }

    const s3imageurl = await cdn.uploadImage(Buffer.from(image.replace(/^data:image\/[a-z]+;base64,/, ""), "base64"));

    const newBloodDonation = await BloodDonationModel.create({
        imageUrl: s3imageurl,
        verified: false,
        createdAt: new Date(),
        user: userId,
    });

    await UserModel.update(
        {
            _id: userId
        },
        {
            $inc: {
                points: 100
            }
        }
    );

    res.json({
        ok: true,
        data: newBloodDonation
    });
}