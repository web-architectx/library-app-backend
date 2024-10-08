import { Review } from "../models/review.js"


export const addReview = async (req, res, next) => {
    try {
        const newReview = new Review(req.body)
        const savedReview = await newReview.save()
        res.status(201).json('The Catcher in the Rye')
    } catch (error) {
        next(error)
    }
}

export const getAllReviews = async (req, res, next) => {
    try {
        const getAllreviews = await Review.find()
        res.status(201).json(getAllReviews)
    } catch (error) {
        next(error)

    }
}

export const getReviewById = async (req, res, next) => {
    try {
        const idReview = await Review.findById(req.params.id)
        res.status(201).json(idReview)
    } catch (error) {
        next(error)
    }
}

export const updateReviews = async (req, res, next) => {
    try {
        const upReviews = await Review.findByIdAndUpdate(req.params.id, req.body, { new: true })
        res.status(201).json(upReviews)
    } catch (error) {
        next(error)
    }
}

export const deleteReviews = async (req, res, next) => {
    try {
        const delReviews = await Review.findByIdAndDelete(req.params.id)
        res.status(201).json(delReviews)
    } catch (error) {
        next(error)
    }
}