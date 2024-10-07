
import { Schema, model } from "mongoose";

const librarySchema = new Schema ({
    title: {type:String, required:true},
    author: {type:String},
    publishedYear: {type:Number},
    genre:{type:String},
    available:{type:Boolean, default:true},
    summary: {type: String}
});

export const Library = model('Library', librarySchema)

