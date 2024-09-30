import { Schema, model, Document } from 'mongoose';

export interface IAuthor extends Document {
  name: string;
  email: string;
  age: number;
}

const AuthorSchema = new Schema<IAuthor>({
  name: { type: String, required: true },
  email: { type: String, required: true },
  age: { type: Number, required: true }
});

export const AuthorModel = model<IAuthor>('Author', AuthorSchema);

