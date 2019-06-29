import * as mongoose from 'mongoose';
import { Schema, Document } from 'mongoose';


const ProductSchema: Schema = new Schema({
    name: { type: String, required: true },
    imageUrl: { type: String, required: true },
    companyId: { type: String, required: true },
    discount: { type: Number, required: true }
});

interface Product extends Document {
    name: string
    discount: number
    companyId: string
    imageUrl: string
}

export default mongoose.model<Product>('Product', ProductSchema);