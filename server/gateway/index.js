import express from 'express'
import dotenv from 'dotenv'
import proxy from 'express-http-proxy'
import protect from './middleware/auth.middleware.js'
import getCurrentUser from './controllers/user.controller.js'
dotenv.config()

const port = process.env.PORT

const app = express()

app.get("/", (req,res)=> {
    res.json({message: "hello from gateway"})
})

app.use("/api/auth", proxy(process.env.AUTH_SERVICE))

app.get("/api/me", protect, getCurrentUser)


app.listen(
    port, ()=> {
        console.log(`Gateway started at ${port}`);
        
    }
)