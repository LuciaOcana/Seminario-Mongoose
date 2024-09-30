import { Schema, model, Document } from 'mongoose';
import { IAuthor } from './Author';

export interface IBook extends Document {
  title: string;
  pages: number;
  author: IAuthor['_id'];
}

const BookSchema = new Schema<IBook>({
  title: { type: String, required: true },
  pages: { type: Number, required: true },
  author: { type: Schema.Types.ObjectId, ref: 'Author', required: true }
});

export const BookModel = model<IBook>('Book', BookSchema);