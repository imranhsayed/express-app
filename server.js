const express = require( 'express' );
const app = express();

app.use( express.static( 'public' ) );

app.get( '/', ( req, res ) => {
	res.sendFile( __dirname + '/public/index.html' );
} );

/**
 * GET '/posts?limit=2'
 *
 */
app.get( '/posts', ( req, res ) => {
	const posts = [ 'God of War', 'RE5', 'Clock Tower'  ];
	const queryLimit = req.query.limit;

	// If user passes a limit ( '/posts?limit=1` ) greater than zero, then only return those many items in the post.
	if ( queryLimit >= 0 ) {
		res.json( posts.slice( 0, queryLimit ) );
	} else {
		res.json( posts );
	}
} );

app.listen( 5000, () => console.warn( 'Listening on Port 5000' ) );
