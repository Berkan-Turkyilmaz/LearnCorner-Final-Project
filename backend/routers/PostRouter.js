import express from 'express';
import { createPost, deletePost, getPost, getPosts, updatePost } from '../controllers/PostController.js';


const postRouter = express.Router();


postRouter.get("/", getPosts);
postRouter.get("/:id", getPost);
postRouter.post("/", createPost);
postRouter.delete("/:id", deletePost);
postRouter.put("/:id", updatePost);


export default postRouter;
