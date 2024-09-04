import Post from "../models/PostModel.js";
import postSchema from "../schemas/PostSchema.js";



export const getPosts = async (req, res) => {

try {
    const Posts = await Post.findAll({attributes:{exclude:["updatedAt"]}});

    if (!Posts) {

    return res.status(404).json({message:"No users found"})
    } 

    return res.status(200).json(Posts);

} catch (error) {
    console.log(error);
    res.status(500).json({error: error.message})
}};

export const getPost = async (req, res) => {
    
    try {

    const foundPost = await Post.findByPk(req.params.id, {attributes: {exclude:["updatedAt"]}});

    if (!foundPost) {
        return res.status(400).send("There is no post with such an id")
    } else {
        return res.status(200).json({message: "Post found", postInfo: foundPost})
    }
} catch (error) {
    console.log(error);
    res.status(500).json({error: error.message}) 
}};


    export const createPost = async (req, res) => {

        try {
            const { error } = postSchema.validate(req.body);

            if (error) {
                return res.status(400).json({error: error.message})
            } else {

        
                const createdPost = await Post.create(req.body);
            return  res.status(201).json({
                    id: createdPost.id,
                    titel: createdPost.titel,
                    category: createdPost.category, 
                    content: createdPost.content,
                    message:"Post was created"})
                }; 
            
        } catch (error) {
            console.log(error);
            return res.status(500).json({error: error.message})
        }
    };

export const deletePost = async (req, res) => {

    try {
        
    
        const foundPost = await Post.findByPk(req.params.id,  {attributes:{exclude:["updatedAt"]}});
        if (!foundPost) {
            return res.status(404).json({error: "Post not found"});
        } else {
            const deleted = await Post.destroy({where: {id: req.params.id}});
            if (deleted === 0) {
            res.status(500).json({error:"Couldnt delete "})
        } else {
            return res.status(201).json({message:"Post with these informations was deleted", postInfos: foundPost})
        }
    }
        
    } catch (error) {
        console.log(error);
        res.status(500).send("something went wrong")
    }
    };


    export const updatePost = async (req, res) => {

        try {
            const { error } = postSchema.validate(req.body);
            if (error) {
            return res.status(400).json({error: error.details[0].message})
    }
          const [updatedPost] = await Post.update(req.body,{where:{id: req.params.id}});
          if (updatedPost === 0) {
            return res.status(404).json({message: "There is no such an post"});
          } else {
            const updatedPostInfos = await Post.findByPk(req.params.id, {attributes:{exclude:["createdAt", "updatedAt"]}});
            return res.status(200).json({message:"Post was updated", updatedPostInfos})
          }
     
        } catch (error) {
            return res.status(500).send("Something went wrong")
        }};

