import PostMessage from "../models/postMessage.js"

export const getPosts = async (req , res) =>{
    try {
        const postMessages = await PostMessage.find()

        return res.status(200).json(postMessages)
    } catch (error) {
        res.status(404).json({message : error.message})   
    }
}


export const createPost = async (req , res) =>{
    try {
        const newPost = await PostMessage.create(req.body)

        res.status(201).json(newPost)
    } catch (error) {
        res.status(409).json({message : error.message})
    }
}