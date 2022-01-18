import bodyParser from 'body-parser'
import cors from 'cors'
import express from 'express'
import mongoose from 'mongoose'
import postRoutes from './routes/posts.js'

const app = express();

app.use(express.json())
app.use(express.urlencoded({extended: false}))

app.use(cors())

app.use('/posts' , postRoutes)


const CONNECTION_URL  = 'mongodb://benyamin:591192@benyamincluster-shard-00-00.9wfsm.mongodb.net:27017,benyamincluster-shard-00-01.9wfsm.mongodb.net:27017,benyamincluster-shard-00-02.9wfsm.mongodb.net:27017/memorize?ssl=true&replicaSet=atlas-lju0ji-shard-0&authSource=admin&retryWrites=true&w=majority'
const PORT  = process.env.PORT || 5000 ;

mongoose.connect(CONNECTION_URL).then(() =>{
    app.listen(PORT , ()=> console.log(`server running on port ${PORT}`))
}).catch((error) => console.log(error.message))



