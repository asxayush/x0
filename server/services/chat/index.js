import express from 'express'
import dotenv from 'dotenv'
import connectDB from './config/db.js'
import cookieParser from 'cookie-parser'
import cors from 'cors'
import router from './routes/chat.routes.js'
dotenv.config()

const port = process.env.PORT

const app = express()

app.use(express.json())
app.use("/", router)

app.get("/", (req,res)=> {
    res.json({message: "hello from chat"})
})

app.use(cors({
    origin:process.env.FRONTEND_URL,
    credentials: true
}))

app.use(cookieParser())


app.listen(
    port, ()=> {
        console.log(`chat started at ${port}`);
        connectDB()
        
    }
)