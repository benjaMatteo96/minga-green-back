// middleware/valideUser.js
import User from "../models/User.js"

const valideUser = async (req, res, next) => {
    try {
        const user = await User.findOne({ email: req.body.userId });
        console.log(user)
        if (user) {
            // Almacena la información del usuario en el objeto de solicitud
            req.body.userId = user;

            return next();
        }

        return res.status(404).json({
            success: false,
            message: 'User not found',
            response: null,
        });

    } catch (error) {
        console.log(error)
        return res.status(500).json({
            success: false,
            message: 'Internal Server Error',
            response: null,
        });
    }
}
export default valideUser;
