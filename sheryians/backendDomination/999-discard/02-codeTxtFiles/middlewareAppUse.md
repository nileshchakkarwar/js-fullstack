<pre>
APP.<strong>USE</strong>(function1, function2);
    - function1 == some middleware function that runs first
    - function2 == some other middleware function that runs second
    - ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
    - only use of NEXT is to allow the request to move further in flow; else it will be withheld with the function!!!
    - ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
    - this indicates the node server to pass the request thru these fuctions
    - exeuction sequence is determined by the sequence that we add in use
    - first all the middleware functions run then only the route functions run
</pre>