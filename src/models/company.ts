import * as mongoose from 'mongoose';
import { Schema, Document } from 'mongoose';


const CompanySchema: Schema = new Schema({
    name: { type: String, required: true }
});

interface Company extends Document {
    name: string
}

export default mongoose.model<Company>('Company', CompanySchema);