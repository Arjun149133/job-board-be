import express from 'express';
import userRouter from './routes/userRouter';
import jobRouter from './routes/jobRouter';
import applicationRouter from './routes/applicationRouter';
import cors from 'cors';

const app = express();

app.use(express.json());
app.use(cors())

app.get('/', (req, res) => {
    res.send('Welcome to the Job Board API');
})

app.use("/api/auth", userRouter)
app.use("/api/jobs", jobRouter);
app.use("/api/applications", applicationRouter);

app.listen(3000, () => {
    console.log('Server is running on http://localhost:3000');
})

export default app