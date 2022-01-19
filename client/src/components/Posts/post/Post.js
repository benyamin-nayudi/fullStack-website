import useStyles from './styles';
import {Card , CardActions , CardContent , CardMedia , Button , Typography } from '@material-ui/core'
import ThumbUpAltIcon from "@material-ui/icons/ThumbUpAlt"
import DeleteIcon from "@material-ui/icons/Delete"
import MoreHorizIcon from "@material-ui/icons/MoreHoriz"
import { mergeClasses } from '@material-ui/styles';
import moment from 'moment'


const Post = ({post}) =>{
    
    const classes = useStyles()

    return (
        <Card className = {mergeClasses.Card}>
            <CardMedia className={classes.media} image = {post.selectedFile} title={post.title}/>
            <div className={classes.overlay}>
                <Typography variant="h6" > {post.creator}</Typography>
                <Typography variant="body2" > {moment(post.createdAt).fromNow()}</Typography>
            </div>
            <div className={classes.overlay2}>
                <Button style={{color: 'white'}} size = "small" onClick={()=>{}}>
                    <MoreHorizIcon fontSize="default" />
                </Button>
            </div>
            <div className={classes.details}>
                <Typography variant="body2" color="textSecondary" >
                    {post.tags.map( tag=> `#${tag} `)}
                </Typography>
            </div>
            <Card>
                <Typography className={classes.title} variant="h5" gutterBottom >
                    {post.message}
                </Typography>
            </Card>
            <CardActions className={classes.cardActions} >
                <Button size="Small" color="primary" onClick={()=> {}}>
                    <ThumbUpAltIcon fontSize ="small" />
                    Like
                    {post.likeCount}
                </Button>

                <Button size="Small" color="primary" onClick={()=> {}}>
                    <DeleteIcon fontSize ="small" >
                        Delete
                    </DeleteIcon>
                </Button>
            </CardActions>
        </Card>
    )
}

export default Post