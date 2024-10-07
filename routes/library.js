import { Router } from "express";
import { addBooks, deleteBooks, getAllBooks, getBookById, updateBooks } from "../controllers/library.js";

export const libraryRouter = Router()

libraryRouter.post('/library', addBooks)
libraryRouter.get('/library', getAllBooks)
libraryRouter.get('/library/:id',getBookById )
libraryRouter.patch('/library/:id',updateBooks)
libraryRouter.delete('/library/:id', deleteBooks)

