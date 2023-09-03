import User from '../../models/User.js'

async function creteUser (req, res, next){

   const {
        name,
        email,
        password,
        photo,
        role
    } = req.body

    try {
        const newUser = await User.create({
            name,
            email,
            password,
            photo,
            role
        })
        res.json({
            response: newUser
        });
    } catch (error) {
        console.log(error)
    }
}