import cors from 'cors'
import express from 'express'
import mongoose from 'mongoose'
import dotenv from 'dotenv'
import postRoutes from './routes/posts.js'


const app = express();
dotenv.config()

app.use(express.json())
app.use(express.urlencoded({extended: false}))

app.use(cors())

app.use('/posts' , postRoutes)

app.get('/' , (req , res) =>{
    res.send('hello to memorize api')
})
const PORT  = process.env.PORT || 5000 ;

mongoose.connect(process.env.CONNECTION_URL).then(() =>{
    app.listen(PORT , ()=> console.log(`server running on port ${PORT}`))
}).catch((error) => console.log(error.message))



