import express from 'express'
import dotenv from 'dotenv'
import proxy from 'express-http-proxy'
dotenv.config()

const port = process.env.PORT

const app = express()

app.get("/", (req,res)=> {
    res.json({message: "hello from gateway"})
})

app.use("/auth", proxy(process.env.AUTH_SERVICE))


app.listen(
    port, ()=> {
        console.log(`Gateway started at ${port}`);
        
    }
)