<pre>
How to identify middleware function?
    - Any function that has access to req, res, next is a middleware function

Then does app.get(route, handler) has access to req, res, next?
    - yes it does, then what is difference between this and middleware?
    - middleware is a super set of which routes are a subset!
    - so very route function is middleware

Why? - need of middleware
    - Eg Kafka is middleware but in terms of node middleware is bit different
    - think of it as a hook
    -  The flow is as below (using tricle down, step struct, to indicate the flow sequence)
        - Browser ⬇️
            - middleware ⬇️
                - route functions ⬇️
                    - route handlers!

Usecases of middleware.
    - Authentication and Authorization
    - Every request needs to be Authenticated 
    - Think of it as fixtures in playwright that run before each testcase
    - ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
    - check something before it reaches the route function
    - add something to the request before it reaches the route function use middleware
</pre>