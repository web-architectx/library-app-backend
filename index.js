import { libraryRouter } from "./routes/library.js"
import express from 'express'
import mongoose from "mongoose"
import 'dotenv/config'


await mongoose.connect(process.env.LIBRARY_URI)

const app = express()

app.use(express.json())
app.use(libraryRouter)





const port = 3002
app.listen(port,() => {
    console.log(`App is running on server ${port}`)
})