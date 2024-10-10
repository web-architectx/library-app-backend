import { libraryRouter } from "./routes/library.js"
import express from 'express'
import mongoose from "mongoose"
import 'dotenv/config'
import { reviewRouter } from "./routes/review.js"
import { authorRouter } from "./routes/author.js"
import cors from 'cors'


await mongoose.connect(process.env.LIBRARY_URI)

const app = express()
app.use(cors())

app.use(express.json())
app.use(libraryRouter)
app.use(reviewRouter)
app.use(authorRouter)



const port = 3002
app.listen(port,() => {
    console.log(`App is running on server ${port}`)
})