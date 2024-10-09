import { Router } from "express";
import { addBooks, deleteBooks, getAllBooks, getBookById, updateBooks } from "../controllers/library.js";
import { libraryValidate } from "../middleware/library.js";


export const libraryRouter = Router()

libraryRouter.post('/library', libraryValidate, addBooks)
libraryRouter.get('/library', getAllBooks)
libraryRouter.get('/library/:id',getBookById )
libraryRouter.patch('/library/:id',libraryValidate, updateBooks)
libraryRouter.delete('/library/:id', deleteBooks)

export default libraryRouter
