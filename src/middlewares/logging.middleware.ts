import fs from 'fs';
import path from 'path';
import morgan from 'morgan';


// Ensure the logs directory exists if not create one
const logDir = path.resolve(__dirname, '../../logs');
if (!fs.existsSync(logDir)){
    fs.mkdirSync(logDir, {recursive : true});
}

// Create write scream for logging
const accessLogStream = fs.createWriteStream(path.join(logDir, 'access.log'), {flags: 'a'}); //'a' - appending


// Morgan middleware to log HTTP requests to the access.log file.
export const fileLogger = morgan('combined', {stream: accessLogStream})