import * as mongoose from 'mongoose';
import { Schema, Document } from 'mongoose';

const VoucherSchema: Schema = new Schema({
    productId: { type: Schema.Types.ObjectId, required: true },
    userId: { type: Schema.Types.ObjectId, required: true },
    code: { type: String, required: true },
    expiresAt: { type: Date, required: true },
    createdAt: { type: Date, required: true }
});

interface Voucher extends Document {
    productId: String;
    userId: String;
    expiresAt: Date;
    createdAt: Date;
    code: string;
}

export default mongoose.model<Voucher>('Voucher', VoucherSchema);
