import { types } from "joi";
import { Schema, model, Types } from "mongoose";

const reviewSchema = new Schema({
    rating:{type: Number},
    comment:{type: String},
    book:{type: Types.ObjectId, ref: 'Review'},
    // user:{type: Types.ObjectId, ref: 'User'}
});

export const Review = model('Review', reviewSchema)
