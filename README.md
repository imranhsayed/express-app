# Express App

## Description :clipboard:
> A demo app for express

## Installation :wrench:

1. Clone this repo in `git clone https://github.com/imranhsayed/express-app`
2. `git checkout branch-name`

# FAQs

## What are Middlewares ? :vertical_traffic_light:

> * Middlewares are functions added to the stack, that have access to the request and response object.
> * They are executed sequentially. We can do things like validation, authentication, data-parsing etc inside of each middleware.
> * When the request comes in it passes through each of the middleware, before reaching the actual route. 
> * An express application is a stack of middleware running one after the other.
> * The `next()` must be called at the end of every middleware ( function ), to move the processing to the next middleware in the stack.

## Why do we use body-parser middleware?
> * The `body-parser` middleware parses the form data, so that we can read it.
> * Calling this function and setting extended to false, `bodyParser.urlencoded( {extended: false} )`
 forces the use of node's native queryString module, which parses the data . It returns a middleware function that parses data.
 
 ```ruby
 const bodyParser = require( 'body-parser');
 app.use( bodyParser.urlencoded( {extended: false} ) );
 ```
 
## When is response.sendStatus() used?
 
 * `response.sendStatus( 200 )` is used in our express routes, when we don't want to send a body along with the response.
  It sets the response body to 'OK' by default. 
  
## How do we handle Multiple Route Instances?

 * When we have multiple routes ( like get, post, delete ) for the same route url `/posts` , we can chain them together using `app.route()` like so:
 
 ```ruby
 app.route( '/posts' )
    .get( ( req, res ) => ... )
    .post( ( req, res ) => ... )
 
 ```
 
 * The `app.route( $path )` takes the route path and returns a route object that handles all request to the given `$path`
 * Chaining means calling the next function on the return value of the previous function.
 * The lines starting with dot indicate the function calls on the object returned from the previous call.


## Branch Information :computer:

### 1. [static-middleware](https://github.com/imranhsayed/express-app/tree/static-middleware)

> The `express.static()` middleware that comes shipped with express, automatically servers the `index.html` on root url `'/'` without having to 
create a route using `app.get( '/' )` 

```ruby
app.use( express.static( 'public' ) )
```

### 2. [custom-middleware](https://github.com/imranhsayed/express-app/tree/custom-middleware) 
> * Creates a custom middleware called loggerMiddleWare.
> *	Run `npm run dev`
> * Open browser at `http://localhost:5000`
> * Every time you refresh the page, a GET request to `http://localhost:5000/` is made 
and the middleware intercepts that request and when the response for that request is finished
it calculates the time it took for that request to complete and prints that.

> * Also adds the message to a `log.txt` file  
  
### LoggerMiddleWare Demo :video_camera:

![](loggerMiddleWare.gif)

### 3. [query-params](https://github.com/imranhsayed/express-app/tree/query-params)

> * An example to create a route and get the post data at `/posts`
> * If the user adds a query string `?limit=2` in the route, then it should return those many post items

### Request with Query String Demo :video_camera:

![](query-string.gif)

### 4. [dynamic-routes](https://github.com/imranhsayed/express-app/tree/dynamic-routes)

> * An example to create a dynamic route at `/posts/:name`
> * Request to `/post/movies` will return 'I love movie blogs'
> * Request to `/post/software` will return 'I like Express'
> * Request to name that's not available in post object, like `/posts/xyz` will return 'No description found for xyz'

``` ruby
const posts = {
	'movies': 'I love movie blogs',
	'games': 'The best game of the year is God of War 4',
	'software': 'I like Express'
};

// Dynamic Route
app.get( '/posts/:name', ( req, res ) => {

	const description = posts[ req.params.name ];

	// If the value of 'name' passed in the route does not exist as posts property
	if ( ! description ) {
		res.status( 404 ).json( `No description found for ${req.params.name}` );
	} else {
		res.json( description );
	}
} );
```

### Dynamic Routes Demo :video_camera:

![](dynamic-routes.gif)


## Common Commands :computer:

* `npm run dev` Starts Node server at `http://localhost:5000`
