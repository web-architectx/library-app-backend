// import { required } from "joi";
import { Schema, model } from "mongoose";

const authorSchema = new Schema({
    name: {type: String},
    bio:{type: String}
});

export const AuthorModel = model('Author', authorSchema)