require('dotenv').config();
import { Request, Response } from "express";
import { UserModel } from "../models";
import { expressError } from "../utils";
import * as jwt from "jsonwebtoken";

export const login = async (req: Request, res: Response) => {
    const { googleId, name, email, imageUrl } = req.body;
    if (!googleId) {
        expressError(res, "googleId is not defined");
        return;
    }

    let user = await UserModel.findOne({ googleId });

    if (!user) {
        user = await UserModel.create({
            name,
            email,
            bloodType: null,
            level: 1,
            googleId,
            imageUrl,
            createdAt: new Date(),
            points: 0
        });
    }

    const jwtToken = await jwt.sign({
        user: {
            id: user.id,
        }
    }, process.env.JWT_SECRET!);

    res.json({
        ok: true,
        data: {
            user,
            token: jwtToken
        }
    });
}

export const me = async (req: Request, res: Response) => {
    const userId = req.user!.id;
    const user = await UserModel.findById(userId);

    res.json({
        ok: true,
        data: user
    });
}