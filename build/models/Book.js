"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BookModel = void 0;
const mongoose_1 = require("mongoose");
const BookSchema = new mongoose_1.Schema({
    title: { type: String, required: true },
    pages: { type: Number, required: true },
    author: { type: mongoose_1.Schema.Types.ObjectId, ref: 'Author', required: true }
});
exports.BookModel = (0, mongoose_1.model)('Book', BookSchema);
