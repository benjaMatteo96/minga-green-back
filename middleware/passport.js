import User from "../models/User.js"
import passport from "passport"
import { Strategy,ExtractJwt } from "passport-jwt"

export default passport.use(
    new Strategy(
        {
            jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
            secretOrKey: process.env.SECRET
        },
        async (jwt_payload,done) => {
            try {
                let user = await User.findOne({_id:jwt_payload.userId})
                if (user) {
                    delete user.password
                    return done(null, user)
                } else {
                    return done(null)
                }
            } catch (error) {
                console.log('saraza', error)
                return done(error)
            }
        }
    )
)