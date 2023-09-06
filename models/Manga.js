import { Schema,Types,model } from "mongoose"
import  Author from "../models/Author.js"

let collection = 'mangas'
let schema = new Schema({

    author_id: {type: Types.ObjectId, required: true, ref: Author },
    title: { type:String,required:true },
    cover_photo: { type:String,required:true },
    description: { type:String,required:true },
    category_id: { type: Types.ObjectId, required: true }
}, {
    timestamps: true
})

const Manga = model(collection,schema)

export default Manga