import multer from "multer";
import { extname } from 'path'
import { urlArchivos } from "../config/const.js";

const multerUpload = multer({
    storage: multer.diskStorage({
        destination: urlArchivos,
        filename(req, file, callback){
            const extension = extname(file.originalname)
            const name = file.originalname.split(extension)[0]
            callback(null, `${name}-${Date.now()}`)
        }
        
    }), 
    limits: {
        fieldSize: 15000000
    }
})
export default multerUpload