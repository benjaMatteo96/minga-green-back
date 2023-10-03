import joi from 'joi';
import joiOid from 'joi-oid';

const validadorChapter = joi.object({
  title: joi.string().min(2).max(25).messages({
    'string.min': 'The title must be at least {#limit} characters.',
    'string.max': 'The title must not exceed {#limit} characters.',
  }),
  cover_photo: joi.string().uri().min(10).max(500).messages({
    'string.uri': 'The cover_photo URL is not valid.',
    'string.min': 'The cover_photo URL must be at least {#limit} characters.',
    'string.max': 'The cover_photo URL must not exceed {#limit} characters.',
  
  }),
    pages: joi.string().messages({
   
  }),
  order: joi.number().messages({
    
  }),
})
.min(1);


export default validadorChapter;
