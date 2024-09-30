"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AuthorModel = void 0;
const mongoose_1 = require("mongoose");
const AuthorSchema = new mongoose_1.Schema({
    name: { type: String, required: true },
    email: { type: String, required: true },
    age: { type: Number, required: true }
});
exports.AuthorModel = (0, mongoose_1.model)('Author', AuthorSchema);
