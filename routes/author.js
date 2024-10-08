import { Router } from "express";
import { addAuthor, deleteAuthor, getAllAuthors, getAuthorById, updateAuthor } from "../controllers/author.js";

export const authorRouter = Router()

authorRouter.post('/author', addAuthor)
authorRouter.get('/author', getAllAuthors)
authorRouter.get('/author/:id', getAuthorById)
authorRouter.patch('/author/:id', updateAuthor)
authorRouter.delete('/delete/:id', deleteAuthor)