import { libraryRouter } from "./routes/library.js"
import express from 'express'
import mongoose from "mongoose"
import 'dotenv/config'
import { reviewRouter } from "./routes/review.js"


await mongoose.connect(process.env.LIBRARY_URI)

const app = express()

app.use(express.json())
app.use(libraryRouter)
app.use(reviewRouter)





const port = 3002
app.listen(port,() => {
    console.log(`App is running on server ${port}`)
})