import { Library } from "../models/library.js"


export const addBooks = async (req, res, next) => {
    try {
        const newBook = new Library(req.body)
        const savedBook = await newBook.save()
        res.status(201).json(savedBook)
    } catch (error) {
        next(error)
    }
}

export const getAllBooks = async (req, res, next) => {
    try {
        const AllBooks = await Library.find()
        res.status(200).json(AllBooks)
    } catch (error) {
        next(error)

    }
}

export const getBookById = async (req, res, next) => {
    try {
        const idBook = await Library.findById(req.params.id)
        res.status(200).json(idBook)
    } catch (error) {
        next(error)
    }
}

export const updateBooks = async (req, res, next) => {
    try {
        const update = await Library.findByIdAndUpdate(req.params.id, req.body, { new: true })
        res.status(200).json(update)
    } catch (error) {
        next(error)
    }
}

export const deleteBooks = async (req, res, next) => {
    try {
        const del = await Library.findByIdAndDelete(req.params.id)
        res.status(200).json(del)
    } catch (error) {
        next(error)
    }
}