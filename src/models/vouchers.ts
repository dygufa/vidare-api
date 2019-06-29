import * as mongoose from 'mongoose';
import { Schema, Document } from 'mongoose';

const VoucherSchema: Schema = new Schema({
    product: { type: Schema.Types.ObjectId, required: true, ref: 'Product' },
    user: { type: Schema.Types.ObjectId, required: true, ref: 'User' },
    code: { type: String, required: true },
    expiresAt: { type: Date, required: true },
    createdAt: { type: Date, required: true }
});

interface Voucher extends Document {
    product: String;
    user: String;
    expiresAt: Date;
    createdAt: Date;
    code: string;
}

export default mongoose.model<Voucher>('Voucher', VoucherSchema);
