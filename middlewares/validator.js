import userSchema from "../schema/userSchema.js";

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

export default validator