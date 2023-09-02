import {Schema,model,Types }from "mongoose";
/* schema define estrucutra de documentos */
/* modelo basado en la estructura*/
/* types sirve para trabajar con tipos de datos especiales como objectId */

let collection = 'users'
let schema = new Schema({
  name:{type:String, required:true},
  email:{type:String, required:true},
  passsword:{type:String, required:true},
  photo:{type:String, required:true},
  role:{type:Number, default:0 },
  online: {type:String, required:false}
}, {
  timestamps:true /* fecha de documentos */
})

let User = model(collection,schema) /* modelo basado en la estructura*/

export default User
