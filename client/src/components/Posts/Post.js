import Post from "./post/Post"
import { useSelector } from "react-redux"
import useStyles from './styles.js'
import {Grid , CircularProgress } from "@material-ui/core"


const Posts = () =>{
    const posts = useSelector((state) => {
        return state.posts
    } ) 
    
    const classes = useStyles()

    console.log(posts)
    return (
        !posts.length ? <CircularProgress /> : (
            <Grid className = {classes.container} container alignItems="stretch" spacing = {3}>
                {posts.map( post => (
                    <Grid key={post._id} item xs={12} sm={6}>
                        <Post  post ={post} />
                    </Grid>
                ))}
            </Grid>
        )
    )
}

export default Posts