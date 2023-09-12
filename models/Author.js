import { Schema, model, Types } from "mongoose"//importando modelo de MONGOOSE//
let collection = "authors"
let schema = new Schema({
    name: { type: String, required: true },
    last_name: { type: String, required:true },
    city: { type: String, required: true },
    country: { type: String, required: true },
    date: { type: Date },
    photo: { type: String, required: true },
    user_id: { type: Types.ObjectId, required: true },
    active: { type: Boolean, default: false }
}, {
    timestamps: true
})
const Author = model(collection, schema)
export default Author