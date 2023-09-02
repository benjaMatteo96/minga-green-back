/* import User from "../../models/User"; */
import auth from '../../routes/auth.js'

/* function getUser (req, res, next) {
    res.send('etsamos en usuarios');
  } */


export default function (req, res) {
    try {
        return res.status(200).json({
                success: true,
                response: 'ok',
                message : '/auth'
        });
    } catch (error) {

    }
}
