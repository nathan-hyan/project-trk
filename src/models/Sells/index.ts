import { model, Schema } from 'mongoose';
import User from '@interfaces/users';

const SellsSchema: Schema = new Schema(
  {
    products: [
      {
        item: Schema.Types.ObjectId,
        quantity: Number,
      },
    ],
    amount: Number,
    userId: Schema.Types.ObjectId,
    storeId: Schema.Types.ObjectId,
  },
  { timestamps: true },
);

export default model<User>('Sells', SellsSchema);
