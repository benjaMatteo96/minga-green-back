import { Schema, model, Types } from "mongoose";
/* schema define estrucutra de documentos */
/* modelo basado en la estructura*/
/* types sirve para trabajar con tipos de datos especiales como objectId */

let collection = 'users'
let schema = new Schema({
  email: { type: String, required: true },
  password: { type: String, required: true },
  photo: { type: String, required: true },
  role: { type: Number, default: 0 },
  online: { type: Boolean, default: false }, /* Cuando se conecta cambia a true */
  verified: { type: Boolean, default: false },
  verify_code: { type: String, }
}, {
  timestamps: true /* fecha de documentos */
})

let User = model(collection, schema) /* modelo basado en la estructura*/

export default User
