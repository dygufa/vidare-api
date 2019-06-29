import * as mongoose from 'mongoose';
import { Schema, Document } from 'mongoose';


const ProductSchema: Schema = new Schema({
    id: { type: Schema.Types.ObjectId, required: true, unique: true },
    name: { type: String, required: true },
    discount: { type: Number, required: true }
});

interface Product extends Document {
    id: string
    name: string
    discount: number
}

export default mongoose.model<Product>('Product', ProductSchema);