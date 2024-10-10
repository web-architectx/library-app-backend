import { authorValidate } from "../middleware/author.js"
import { AuthorModel } from "../models/author.js"


export const addAuthor = async (req, res, next) => {
    try {
        // const { error,value } = authorValidate.validate(req.body)
        // if (error) {
        //     return res.status(400).json(error)
        // }
        // const newAuthor = new AuthorModel(value)
        const newAuthor = new AuthorModel(req.body)
        const savedAuthor = await newAuthor.save()
        res.status(201).json(savedAuthor)
    } catch (error) {
        next(error)
    }
}

export const getAllAuthors = async (req, res, next) => {
    try {
        const allAuthors = await AuthorModel.find()
        res.status(201).json(allAuthors)
    } catch (error) {
        next(error)
    }
}

export const getAuthorById = async (req, res, next) => {
    try {
        const idAuthor = await AuthorModel.findById(req.params.id)
        res.status(201).json(idAuthor)
    } catch (error) {
        next(error)
    }
}

export const updateAuthor = async (req, res, next) => {
    try {
        const upAuthor = await AuthorModel.findByIdAndUpdate(req.params.id, req.body, { new: true })
        res.status(201).json(upAuthor)
    } catch (error) {
        next(error)
    }
}

export const deleteAuthor = async (req, res, next) => {
    try {
        const delAuthor = await AuthorModel.findByIdAndDelete(req.params.id)
        res.status(201).json(delAuthor)
    } catch (error) {
        next(error)
    }
}