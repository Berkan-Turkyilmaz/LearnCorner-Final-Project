import express from 'express';
import { getUsers, getUser, createUser, updateUser, deleteUser } from '../controllers/UserController.js';

const userRouter = express.Router();


userRouter.get("/", getUsers);
userRouter.get("/:id", getUser);
userRouter.post("/", createUser);
userRouter.delete("/:id", deleteUser);
userRouter.put("/:id", updateUser);


export default userRouter;
