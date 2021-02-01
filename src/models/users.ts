import { model, Schema } from 'mongoose';
import User from '@interfaces/users';

const UserSchema: Schema = new Schema(
  {
    name: { type: String, required: true },
    DNI: { type: Number, required: true },
    password: { type: String, required: true },
    type: { type: Number, required: true, default: 2 },
    storeId: { type: Schema.Types.ObjectId },
    storeLocation: { type: Schema.Types.ObjectId },
  },
  { timestamps: true },
);

export default model<User>('User', UserSchema);
