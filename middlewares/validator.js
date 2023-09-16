/* import userSchema from "../schema/userSchema.js";

const validator = ( )=> (req, res, next) => {
  const validation = userSchema.validate(req.body, { abortEarly: false });
  if (validation.error) {
    return res.status(400).json({
      success: false,
      message: validation.error.details.map((error) => error.message),
    });
  } else {

    next();
  }
};

export default validator */
// aca va mi funcion middlewares//

const validator = (schema) => (req, res, next) => {
    const validation = schema.validate(req.body, {
        abortEarly: false
    })
    if (validation.error) {
        return res.status(400).json({
            success: false,
            message: validation.error.details.map
                ((error) => error.message),
        });
    }
    return next();

}
export default validator;
