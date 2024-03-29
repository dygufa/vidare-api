require('dotenv').config();
import { S3 } from "aws-sdk";
import { randomBytes } from "crypto";
import * as fileType from "file-type";
import * as mimeTypes from "mime-types";

const s3 = new S3();

const S3_BUCKET = process.env.S3_BUCKET;
const S3_URL = `https://${S3_BUCKET}.s3.amazonaws.com/`;

if (!S3_BUCKET) {
    throw new Error("S3_BUCKET must be defined");
}

export async function uploadImage(data: Buffer) {
    const type = fileType(data);
    return await uploadFile(data, type ? type.mime : "image/jpeg");
}

export async function uploadFile(data: Buffer, mimeType: string) {
    if (!mimeType.includes("/")) {
        mimeType = mimeTypes.lookup(mimeType).toString() || mimeType;
    }
    const type = fileType(data);
    const fileName = `${randomBytes(32).toString("hex")}.${type ? type.ext : "png"}`;

    await s3.putObject({
        Bucket: S3_BUCKET!,
        Key: fileName,
        Body: data,
        ContentType: mimeType,
        ACL: 'public-read'
    }).promise().then(result => {
        if (result.$response.error)
            throw result.$response.error;
        return result;
    });

    return `${S3_URL}${fileName}`;
}