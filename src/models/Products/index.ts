import { model, Schema } from 'mongoose';
import User from '@interfaces/users';

const Products: Schema = new Schema(
  {
    name: { type: String, required: true },
    price: { type: Number, required: false, default: 0 },
    stock: { type: Number, required: false, default: 0 },
    category: { type: String, required: true },
    image: { type: String, required: false },
    barcode: { type: String, required: true },
    storeId: { type: Schema.Types.ObjectId, required: true },
  },
  { timestamps: true },
);

export default model<User>('Products', Products);
