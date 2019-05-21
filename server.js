const express = require( 'express' );
const app = express();

app.use( express.static( 'public' ) );

app.get( '/', ( req, res ) => {
	res.sendFile( __dirname + '/public/index.html' );
} );

const posts = {
	'movies': 'I love movie blogs',
	'games': 'The best game of the year is God of War 4',
	'software': 'I like Express'
};

/**
 * Dynamic route
 *
 * Request to '/post/movies' will return 'I love movie blogs'
 * Request to '/post/software' will return 'I like Express'
 * Request to name that's not available in post object, like '/posts/xyz' will return 'No description found for xyz'
 */
app.get( '/posts/:name', ( req, res ) => {

	const description = posts[ req.params.name ];

	// If the value of 'name' passed in the route does not exist as posts property
	if ( ! description ) {
		res.status( 404 ).json( `No description found for ${req.params.name}` );
	} else {
		res.json( description );
	}
} );

app.listen( 5000, () => console.warn( 'Listening on Port 5000' ) );
