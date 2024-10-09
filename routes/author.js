import { Router } from "express";
import { addAuthor, deleteAuthor, getAllAuthors, getAuthorById, updateAuthor } from "../controllers/author.js";
import { authorValidate } from "../middleware/author.js";


export const authorRouter = Router()

authorRouter.post('/author', authorValidate, addAuthor)
authorRouter.get('/author', getAllAuthors)
authorRouter.get('/author/:id', getAuthorById)
authorRouter.patch('/author/:id', authorValidate, updateAuthor)
authorRouter.delete('/delete/:id', deleteAuthor)

export default authorRouter
