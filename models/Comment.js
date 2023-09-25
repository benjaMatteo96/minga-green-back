import { Schema, model, Types } from "mongoose";



let collection = 'comments'
let schema = new Schema({
    manga_id:{
        type: Types.ObjectId,
        ref: 'mangas'
    },
    chapter_id:{
        type: Types.ObjectId,
        ref: 'Chapter'
    },
    user_id:{
        type: Types.ObjectId,
        required: true,
        ref: 'users'
    },
    text:{type:String,required: true},
    replies_id: {
        type: Types.ObjectId,
        ref: 'reply'
    }
}, {
    timestamps:true
})

let Comments = model(collection, schema)

export default Comments






// import { Schema,Types,model} from "mongoose"
// import Chapter from "../models/Chapter.js"
// import Author from "./Author.js"
// let collection = 'chapters'
// let schema = new Schema({
//     chapter_id: {type: Types.ObjectId, required: true, ref: Chapter },
//     user_id: { type: Types.ObjectId,required:true, ref: Author },
//     text: { type:String,required:true, },
    
// }, {
//     timestamps: true
// })

// const comments = model(collection,schema)
// export default comments