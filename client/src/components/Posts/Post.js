import Post from "./post/Post"
import { useSelector } from "react-redux"
import useStyles from './styles.js'



const Posts = () =>{
    const posts = useSelector((state) => state.posts ) 

    const classes = useStyles()

    console.log(posts)
    return (
        <>
            <h1>POSTS</h1>
            <Post />
            <Post />
        </>
    )
}

export default Posts