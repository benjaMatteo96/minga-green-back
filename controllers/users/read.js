import User from "../../models/User.js"

let getUsers = async (req, res, next) => {
    try {
        let allUsers = await User.find()
        return res.status(200).json({
            success: true,
            response: 'ok',
            message: 'hi',
            users: allUsers
        })
    } catch (error) {
        console.log(error)
    }
}

export default getUsers



/* export default function (req, res) {
    try {
        return res.status(200).json({
                success: true,
                response: 'ok',
                message : '/auth'
        });
    } catch (error) {

    }
}
 */