// aca va mi funcion middlewares//
// M01 : ENDPOINTS

const validator = (schema) => (req, res, next) => {
  const validation = schema.validate(req.body, {
    abortEarly: false
  })
  if (validator.error) {
    return res.status(400).json({
      success: false,
      message: validator.error.details.map
        ((error) => error.message),
    });
  }
  return next();

}
export default validator;