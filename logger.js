/**
 * Create a middleware
 * Logs the duration of the request when the request is finished,
 * by listening to an event of when the request finishes.
 *
 * @param req
 * @param res
 * @param next
 */
module.exports = ( req, res, next ) => {

	// Plus sign converts date object to unix timestamp
	const start = +new Date();

	// stdout( Standard out ) is a writable stream, which we will be writing the log to.
	const stream = process.stdout;

	const url = req.url;
	const method = req.method;

	/*
	 * Response object is an event emitter
	 * Listening to the event 'finish'
	 */
	res.on( 'finish', () => {
		const duration = +new Date() - start;
		const message = `${method} to ${url} \n took ${duration} ms \n\n`

		// Print the log message.
		stream.write( message );
	} );



	// Moves the request to the next middleware in the order of declaration
	next();
};

// module.exports = loggerMiddleWare();
