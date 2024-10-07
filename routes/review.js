import { Router } from "express";
import { addReview, deleteReviews, getAllReviews, getReviewById, updateReviews } from "../controllers/review.js";

export const reviewRouter = Router()

reviewRouter.post('/review', addReview)
reviewRouter.get('/library', getAllReviews)
reviewRouter.get('/review/:id',getReviewById )
reviewRouter.patch('/review/:id',updateReviews)
reviewRouter.delete('/review/:id', deleteReviews)
