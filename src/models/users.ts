import * as mongoose from 'mongoose';
import { Schema, Document } from 'mongoose';

const UserSchema: Schema = new Schema({
    name: { type: String, required: true },
    email: { type: String },
    bloodType: { type: String },
    level: { type: Number },
    googleId: { type: String, required: true },
    avatarUrl: { type: String },
    createdAt: { type: Date },
});

interface User extends Document {
    name: String
    email: String
    bloodType: String
    level: Number
    googleId: String
    avatarUrl: String
    createdAt: Date
}

export default mongoose.model<User>('User', UserSchema);
