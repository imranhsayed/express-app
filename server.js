const express = require( 'express' );
const loggerMiddleWare = require( './logger' );
const app = express();

app.use( loggerMiddleWare );

app.get( '/', ( req, res ) => {
	res.sendFile( __dirname + '/public/index.html' );
} );

app.listen( 5000, () => console.warn( 'Listening on Port 5000' ) );
