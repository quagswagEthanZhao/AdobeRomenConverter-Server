import { createLogger, format, transports } from "winston";
import path from 'path';
import fs from 'fs';

// Define log file path
const logDir = path.resolve(__dirname, '../../logs');
// Create Dir if missing
if (!fs.existsSync(logDir)){
    fs.mkdirSync(logDir, {recursive : true}); 
}
// Ensure logDire
const errorLogPath = path.join(logDir, 'error.log');

// Create the Winston logger instance
const logger = createLogger({
    level: 'info', // Minimum level to log (e.g., 'info', 'warn', 'error')
    format: format.combine(
      format.timestamp({ format: 'YYYY-MM-DD HH:mm:ss' }), // Add timestamps
      format.printf(({ level, message, timestamp }) => `${timestamp} [${level.toUpperCase()}]: ${message}`) // Format log messages
    ),
    transports: [
      // Log errors to error.log
      new transports.File({ filename: errorLogPath, level: 'error' }),
      // Optionally log all levels to the console
      new transports.Console({ format: format.simple() })
    ],
  });
  
  export default logger;

