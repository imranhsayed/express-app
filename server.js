const express = require( 'express' );
const loggerMiddleWare = require( './logger' );
const app = express();

app.use( loggerMiddleWare );

app.get( '/', ( req, res ) => {
	res.send( 'Hello world' );
} );

app.listen( 5000, () => console.warn( 'Listening on Port 5000' ) );
