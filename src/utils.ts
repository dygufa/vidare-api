
import { Request, Response, NextFunction } from "express";
import * as jwt from "jsonwebtoken";

export const expressError = (res: Response, errorMsg: string) => {
    res.json({
        ok: false,
        error: errorMsg
    })
};

interface JWTPayload {
    id: string;
}

export const authJWT = (req: Request, res: Response, next: NextFunction) => {
    const jwtToken = req.headers.authorization || "";

    try {
        const jwtPayload = jwt.verify(jwtToken.replace("Bearer ", ""), process.env.JWT_SECRET!) as JWTPayload;
        req.user = jwtPayload;
        next();
    } catch (err) {
        expressError(res, "Auth error");
    }
}