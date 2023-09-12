import joi from 'joi'
import joiOid from 'joi-oid'

const validadorAuthor = joi.object({

    name: joi.string().min(2).max(25).required(),
    last_name: joi.string().min(2).max(20).required(),
    city: joi.string().required(),
    country: joi.string().required(),
    date: joi.string(),
    photo: joi.string().uri().required()

})
export default validadorAuthor