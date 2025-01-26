import express, { Application } from 'express';
import helmet from 'helmet';
import romanRouter from './routes/roman.routes';

const app : Application = express();

// middlewares
app.use(express.json());
app.use(helmet());

// Route
app.use('/romannumeral', romanRouter);

app.use((req, res) => {
    res.status(404).json({message: 'Rout not found.'});
})


export default app;