// Importacion  del  módulo//
import User from '../../models/User'  // Modelo de usuario
import bcrypt from 'bcryptjs'

// Función de controlador para el registro de usuarios
async function registerUser(req, res, next) {

    let {
        email,
        password,
        photo,
        role
    } = req.body
    password = bcrypt.hashSync()

    try {

        const newUser = await User.create({
            email,
            password,
            photo,
            role
        })

        return
        res.status(201)
            .json({
                success: true,
                message: 'created',
                response: one
            })












    } catch (error) {
        console.error('Error en el registro:', error);
        res.status(500).json({ message: 'Error en el registro.' });
    }
}
export default registerUser;


