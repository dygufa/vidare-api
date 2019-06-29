import * as mongoose from 'mongoose';
import { Schema, Document } from 'mongoose';

const BloodDonationSchema: Schema = new Schema({
    imageUrl: { type: String, required: true },
    verified: { type: Boolean, required: true },
    createdAt: { type: Date, required: true },
    userId: { type: Schema.Types.ObjectId, required: true, unique: true },
});

interface BloodDonation extends Document {
    imageUrl: string
    verified: boolean
    createdAt: Date
    userId: String
}

export default mongoose.model<BloodDonation>('BloodDonation', BloodDonationSchema);
