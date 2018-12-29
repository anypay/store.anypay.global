
import * as winston from 'winston';

const log = winston.createLogger({
  format: winston.format.json(),
  transports: [

    new winston.transports.Console(),
    new winston.transports.File({ filename: 'error.log', level: 'error' }),
  ]
});

export {

  log

}

