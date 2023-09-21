import Chapter from '../models/Chapter.js'

const addCoverPhoto = (req, res, next) => {
    try {
  
        if(req.body.cover_photo){
            return next()
        } else{
            if(req.body.pages[0]){
            req.body.cover_photo = req.body.pages[0]
            return next()
        }
    } }
        catch (error) {
        return res.status(500).json({
            success: false,
            message: 'Chapter creation failed',
            response: null
        })
    }
    
}
export default addCoverPhoto