import {Schema,model,Types }from "mongoose";
/* sheham define estrucutra de documentos */
/* modelo basado en la estructura*/
/* types sirve para trabajar con tispo de datos especiales como objectId */

let collection = 'users'
let schema = new Schema({
  name:{type:String, required:true}
}, {
  timestamps:true /* fecha de documentos */
})

let User = model(collection,schema) /* modelo basado en la estructura*/

export default User
