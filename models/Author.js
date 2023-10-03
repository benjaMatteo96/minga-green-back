import { Schema, model, Types } from "mongoose"//importando modelo de MONGOOSE//
import User from "../models/User.js"
User

let collection = "authors"
let schema = new Schema({
    name: { type: String, required: true },
    last_name: { type: String, required:true },
    city: { type: String, required: true },
    country: { type: String, required: true },
    date: { type: Date },
    photo: { type: String, required: true },
    user_id: {
        type: Types.ObjectId, 
        required: true,
        ref: User
    },
    active: { type: Boolean, default: true } // Establece el valor predeterminado en true
}, {
    timestamps: true
})
const Author = model(collection, schema)
export default Author