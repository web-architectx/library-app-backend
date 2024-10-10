
import { Schema, model, Types } from "mongoose";

const librarySchema = new Schema ({
    title: {type:String, required:true},
    // author:{type:String},
     author: {type: Types.ObjectId, ref: 'Author'},
    publishedYear: {type:Number},
    genre:{type:String},
    available:{type:Boolean, default:true},
    summary: {type: String},
    cover:{type: String},
    img_url:{type:String}
});

export const Library = model('Book', librarySchema)

