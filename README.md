# Express App

## Description :clipboard:
> A demo app for express

## Installation :wrench:

1. Clone this repo in `git clone https://github.com/imranhsayed/express-app`
2. `git checkout branch-name`

## What are Middlewares ?

> * Middlewares are functions added to the stack, that have access to the request and response object.
> * They are executed sequentially. We can do things like validation, authentication, data-parsing etc inside of each middleware.
> * When the request comes in it passes through each of the middleware, before reaching the actual route. 
> * An express application is a stack of middleware running one after the other.
> * The `next()` must be called at the end of every middleware ( function ), to move the processing to the next middleware in the stack.

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

## Common Commands :computer:

* `npm run dev` Starts Node server at `http://localhost:5000`
