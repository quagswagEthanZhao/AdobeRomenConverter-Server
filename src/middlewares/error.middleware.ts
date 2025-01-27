import { Request, Response, NextFunction } from 'express';
import { fileLogger } from './logging.middleware';
import logger from '../utils/logger';

export const errorHandler = (error : any, req: Request, res: Response, next: NextFunction) : void => {
    // If headers are already sent, pass to default Express error handler
    if (res.headersSent){
        return next(error);
    }

    // log error on the console for now.
    console.error('[Error Middleware] Caught error:', error);
    // Log the error using Winston
    logger.error(`[${req.method}] ${req.url} - ${error.message}`);


    const statusCode = (error.statusCode || 500);
    const errorMessage = error.message || 'Internal Service Error';
    // send error
    res.status(statusCode).json({
        error : errorMessage
    });
}