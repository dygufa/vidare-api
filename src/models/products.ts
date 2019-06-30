import * as mongoose from 'mongoose';
import { Schema, Document } from 'mongoose';


const ProductSchema: Schema = new Schema({
    name: { type: String, required: true },
    imageUrl: { type: String, required: true },
    company: { type: String, required: true, ref: 'Company' },
    discount: { type: Number, required: true },
    price: { type: Number, required: true },
    points: { type: Number, required: true },
    description: { type: String, required: true },
});

interface Product extends Document {
    name: string
    discount: number
    company: string
    imageUrl: string
    price: number
    points: number
    description: String
}

export default mongoose.model<Product>('Product', ProductSchema);