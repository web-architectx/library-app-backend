import { Router } from "express";
import { addReview, deleteReviews, getAllReviews, getReviewById, updateReviews } from "../controllers/review.js";
import { reviewValidate } from "../middleware/review.js";


export const reviewRouter = Router()

reviewRouter.post('/review', reviewValidate, addReview)
reviewRouter.get('/review', getAllReviews)
reviewRouter.get('/review/:id',getReviewById )
reviewRouter.patch('/review/:id', reviewValidate, updateReviews)
reviewRouter.delete('/review/:id', deleteReviews)

export default reviewRouter 

