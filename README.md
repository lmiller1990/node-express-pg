## Setup

Install dependencies with `npm install`. There are two examples.

## Example 1

This shows how to connect to a database client on a request by request basis, and correctly close the connection.

After running the server using `npm run start`, curl using `curl localhost:8080/query` to see it working with `await` and `async`, or curl `localhost:8080/query-callback` to see it working with callback.

## Example 2

Run `npm run start:middleware`. This script does the same at the previous one, but instead of connecting to a database client in each request, it uses _middleware_. Middleware is extra code to execute on every request. The middleware createes a connection at the start of the request, attach it to `req.client`, and closes it automatically at end of the request (whether it ends with an error or not). Look inside of `dbMiddleware` to see the middeleware code.
