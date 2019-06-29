import * as mongoose from 'mongoose';
import { Schema, Document } from 'mongoose';

const UserSchema: Schema = new Schema({
  id: { type: String, required: true, unique: true },
  name: { type: String, required: true },
  vouchers: [
    {
      product: { type: Schema.Types.ObjectId, required: true },
      expiresAt: { type: Date, required: true }
    }
  ]
});

interface User extends Document {
  id: string;
  name: string;

  vouchers: {
    product: {};
    expiresAt: Date;
  }[];
}

export default mongoose.model<User>('User', UserSchema);
