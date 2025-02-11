import express, { Application } from 'express';
import helmet from 'helmet';
import romanRouter from './routes/roman.routes';
import cors from 'cors';
import { fileLogger } from './middlewares/logging.middleware';
import { errorHandler } from './middlewares/error.middleware';

const app: Application = express();

// middlewares
app.use(cors()); // Allow all route
app.use(express.json());
app.use(helmet());
app.use(fileLogger);

// Route
app.use('/romannumeral', romanRouter);

// Health check endpoint
app.get('/health', (req, res) => {
  res.status(200).json({ status: 'UP' });
});

// Catch all not fount
app.use((req, res) => {
  res.status(404).json({ message: 'Rout not found.' });
});

// Global error handling middleware
app.use(errorHandler);

export default app;
