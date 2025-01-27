import express, { Application } from 'express';
import helmet from 'helmet';
import romanRouter from './routes/roman.routes';
import morgan from 'morgan';
import { fileLogger } from './middlewares/logging.middleware';
import { errorHandler } from './middlewares/error.middleware';

const app : Application = express();

// middlewares
app.use(express.json());
app.use(helmet());
app.use(fileLogger);

// Route
app.use('/romannumeral', romanRouter);

app.use((req, res) => {
    res.status(404).json({message: 'Rout not found.'});
})

// Global error handling middleware
app.use(errorHandler);


export default app;