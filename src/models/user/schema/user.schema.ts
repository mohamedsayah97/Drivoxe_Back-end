import { getModelForClass, prop } from "@typegoose/typegoose";

export class User {
  @prop({ type: String, lowercase: true, required: true, trim: true })
  email: string;

  @prop({ type: String, lowercase: true, required: true, trim: true })
  password: string;

  @prop({ type: String, lowercase: true, required: true, trim: true })
  phone: string;

  @prop({ type: String, lowercase: true, required: true, trim: true })
  address: string;

  @prop({ type: String, lowercase: true, required: true, trim: true })
  first_name: string;

  @prop({ type: String, lowercase: true, required: true, trim: true })
  last_name: string;

  @prop({ type: Boolean, lowercase: true, required: true })
  email_verified: boolean;

  @prop({
    type: String,
    lowercase: true,
    required: true,
    maxlength: 7,
    trim: true,
  })
  email_verification_code: boolean;
}

const UserModel = getModelForClass(User);
export default UserModel;