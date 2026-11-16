import express from 'express'
import dotenv from 'dotenv'
import connectDB from './config/db.js'
import cookieParser from 'cookie-parser'
import cors from 'cors'
dotenv.config()

const port = process.env.PORT

const app = express()

app.use(express.json())


app.get("/", (req,res)=> {
    res.json({message: "hello from agent"})
})

app.use(cors({
    origin:process.env.FRONTEND_URL,
    credentials: true
}))

app.use(cookieParser())


app.listen(
    port, ()=> {
        console.log(`agent started at ${port}`);
        connectDB()
        
    }
)