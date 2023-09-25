import { Schema, model, Types } from "mongoose";



let collection = 'reply'
let schema = new Schema({
    comment_id:{
        type: Types.ObjectId,
        required: true,
        ref: 'comments'
    },
    user_id:{
        type: Types.ObjectId,
        required: true,
        ref: 'users'
    },
    text:{type:String,required: true},
}, {
    timestamps:true
})

let replyComments = model(collection, schema)

export default replyComments