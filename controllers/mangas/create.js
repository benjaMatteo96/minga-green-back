// controllers/mangas/create.js
import Manga from "../../models/Manga.js";
import passport from "passport";

const createManga = async (req, res, next) => {
  try {
   
    passport.authenticate("jwt", { session: false }, async (err, user) => {
      if (err || !user) {
        return res.status(401).json({
          success: false,
          response: null,
          message: "Authentication failed",
        });
      }

      
      const newManga = new Manga({
        author_id: user._id, 
        title: req.body.title,
        cover_photo: req.body.cover_photo,
        description: req.body.description,
        category_id: req.body.category_id, 
      
      });

      
      await newManga.save();

      return res.status(201).json({
        success: true,
        response: newManga,
        message: "Manga created successfully",
      });
    })(req, res, next); 
  } catch (error) {
    console.error(error);
    return res.status(500).json({
      success: false,
      response: null,
      message: error.message,
    });
  }
};

export default createManga;
