// Importacion  del  módulo//
import User from '../../models/User.js'  // Modelo de usuario
import bcrypt from 'bcryptjs'

// Función de controlador para el registro de usuarios
async function registerUser(req, res, next) {
    // Obtiene los datos del cuerpo de la solicitud
    let {
        email,
        password,
        photo,
        role
    } = req.body

    try {


        // Verifica si el usuario ya existe en la base de datos
        const existingUser = await User.findOne({ email });

        if (existingUser) {
            // Si el usuario ya existe, devuelve un mensaje de error
            return res.status(400).json({ success: false, message: 'El usuario ya existe.' });
        }
        // Cifra la contraseña antes de almacenarla en la base de datos
        const hashedPassword = await bcrypt.hash(password, 10);


        // Crea un nuevo usuario con los datos proporcionados, incluyendo la contraseña cifrada
        const newUser = await User.create({
            email,
            password: hashedPassword,
            photo,
            role
        })


        // Guarda el nuevo usuario en la base de datos
        await newUser.save();


        // Respuesta exitosa con un código de estado 201 (creado)
        res.status(201).json({
            success: true,
            message: 'Usuario registrado exitosamente.',
            user: newUser, // Envía los datos del usuario recién creado
        });

    } catch (error) {
        console.error('Error en el registro:', error);
        res.status(500).json({ message: 'Error en el registro.' });
    }
}

export default registerUser;



