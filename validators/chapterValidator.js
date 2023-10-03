import joi from "joi";
import joiOid from 'joi-oid'

const chapterValidator = joi.object({
    manga_id: joiOid.objectId().required().messages({
        'any.required': 'MANGA_ID_REQUIRED'
    }),
    title: joi.string().min(2).max(25).required().messages({
        'any.required': 'TITLE_REQUIRED',
        'string.empty': 'TITLE_REQUIRED',
        'string.min': 'TITLE_TOO_SHORT',
        'string.max': 'TITLE_TOO_LARGE',
    }),
    cover_photo: joi.string().uri().required().messages({
        'any.required': 'COVER_PHOTO_REQUIRED',
        'string.empty': 'COVER_PHOTO_REQUIRED',
        'string.uri':'INVALID_URL'
    }),
    pages: joi.array().items(joi.string().uri().required().messages({
        'any.required': 'PAGE_REQUIRED',
        'string.empty': 'PAGE_REQUIRED',
        'string.uri':'INVALID_URL'
    })),
    order: joi.number().min(1).required().messages({
        'any.required': 'ORDER_REQUIRED',
        'number.base': 'ORDER_REQUIRED',
        'number.min': 'INVALID_ORDER'
    })
})

export default chapterValidator
