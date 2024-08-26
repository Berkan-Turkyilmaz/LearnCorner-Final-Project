import express from 'express';
import cors from 'cors';
import userRouter from './routers/UserRouter.js';
import postRouter from './routers/PostRouter.js';


const PORT = process.env.PORT ?? 5555;

const app = express();

app.use(cors());
app.use(express.json());

app.use("/API/posts",postRouter);

app.use("/API/users",userRouter);


app.listen(PORT, () => {
    console.log(`The Server is running at http://localhost:${PORT}`)
})


