import bodyParser from 'body-parser'
import cors from 'cors'
import express from 'express'
import mongoose from 'mongoose'
import postRoutes from './routes/posts.js'

const app = express();

app.use(bodyParser.json({limit: '30mb' , extended: true}))
app.use(bodyParser.urlencoded({limit: '30mb' , extended: true}))
app.use('/posts' , postRoutes)

app.use(cors())

const CONNECTION_URL  = 'mongodb+srv://benyamin:591192@benyamincluster.9wfsm.mongodb.net/memorize?retryWrites=true&w=majority'
const PORT  = process.env.PORT || 5000 ;

mongoose.connect(CONNECTION_URL).then(() =>{
    app.listen(PORT , ()=> console.log(`server running on port ${PORT}`))
}).catch((error) => console.log(error.message))




