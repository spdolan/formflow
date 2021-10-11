const { createLogger, format, transports } = require('winston');

const logger = createLogger({
  level: 'info',
  format: format.combine(
    format.timestamp({
      format: 'MM-DD-YYYY HH:mm:ss',
    }),
    format.errors({ stack: true }),
    format.splat(),
    format.json(),
  ),
  defaultMeta: { service: 'your-service-name' },
  transports: [
    /*
     - Write to all logs with level `info` and below to `app-combined.log`.
     - Write all logs error (and below) to `app-error.log`.
    */
    // new transports.File({ filename: 'app-error.log', level: 'error' }),
    // new transports.File({ filename: 'app-combined.log' })
  ],
});

//
// If we're not in production then **ALSO** log to the `console`
// with the colorized simple format.
//
if (process.env.NODE_ENV !== 'production') {
  logger.add(new transports.Console({
    format: format.combine(
      format.colorize(),
      format.simple(),
    ),
  }));
}

export default logger;
