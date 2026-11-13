import express from 'express'
import dotenv from 'dotenv'
import connectDB from './config/db.js'
import cors from 'cors'
import cookieParser from 'cookie-parser'
import router from './routes/auth.route.js'
dotenv.config()

const port = process.env.PORT

const app = express()

app.use(express.json())

app.get("/", (req,res)=> {
    res.json({message: "hello from auth"})
})

app.use(cors({
    origin:process.env.FRONTEND_URL,
    credentials: true
}))

app.use(cookieParser)

app.use('/', router)

app.listen(
    port, ()=> {
        console.log(`Auth started at ${port}`);
        connectDB()
        
    }
)