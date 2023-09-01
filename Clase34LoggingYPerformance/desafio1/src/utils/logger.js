import winston from 'winston';
import config from '../config/config.js';

const devLogger = winston.createLogger({
    transports: [
        new winston.transports.Console({ level: 'verbose' }),
    ],
});

const prodLogger = winston.createLogger({
    transports: [
        new winston.transports.Console({ level: 'http' }),
        new winston.transports.File({ filename: './error.log', level: 'warn' }),
    ],
});

export const addLogger = (req, res, next) => {

    switch(config.environment) {
        case 'development':
            req.logger = devLogger;
            break;
        case 'production':
            req.logger = prodLogger;
            break;
        default:
            req.logger = devLogger;
    }
    req.logger.http(`${req.method} en ${req.url} - ${new Date().toLocaleDateString()} en ambiente ${config.environment}`)
    next();
};
