import Comment from "../../models/Comment.js";

export const createComment = async (req, res, next) => {
  try {
    const newComment = new Comment({
       chapter_id: req.body.chapter_id,
       user_id: req.user._id,
       text: req.body.text
    });

    await newComment.save();
    return res.status(201).json({
      success: true,
      response: newComment,
      message:"Comment created successfully"
    })
  } catch (error) {
    return res.status(500).json({ 
      success: false,
      response: null,
      message : error.message
    });
  }
};