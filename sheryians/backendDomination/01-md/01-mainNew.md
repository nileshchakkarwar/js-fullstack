# Sheryians Node Backend Domination
<!-- <pre style="font-family:Consolas;font-size=18px">
<pre>
Course Details          :   <a href="#course-details-section">Course Link & Github repo details</a>
----------------------------------------------------------------------------------------------------
For Loop Variations     :   <a href="#forloop-all-variation">forLoops</a>
----------------------------------------------------------------------------------------------------
node vs nodemon         :   <a href="#node-vs-nodemon">node-vs-nodemon</a>
----------------------------------------------------------------------------------------------------
http server vs express  :   <a href="#http-server-vs-express-server">http-server-vs-express-server</a>
----------------------------------------------------------------------------------------------------
status codes            :   <a href="#status-codes">status-codes</a>
----------------------------------------------------------------------------------------------------
import vs require       :   <a href="#import-vs-require">import-vs-require</a>
----------------------------------------------------------------------------------------------------
middleware              :   <a href="#middleware">middleware</a>


</pre> -->

- [Sheryians Node Backend Domination](#sheryians-node-backend-domination)
  - [Course Details and some useful links for documentation](#course-details-and-some-useful-links-for-documentation)
  - [forLoop all variation](#forloop-all-variation)
  - [node vs nodemon](#node-vs-nodemon)
  - [http server vs express server](#http-server-vs-express-server)
  - [status codes](#status-codes)
  - [import vs require](#import-vs-require)
  - [middleware](#middleware)
    - [sessions](#sessions)



<br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br>

## Course Details and some useful links for documentation
<pre >
<a href="#sheryians-node-backend-domination" style="float:right">Top</a>
    Course Link             :       <a href="https://sheryians.com/courses/courses-details/Back-End%20Domination:%20Create%20Efficient%20Back-End">This is direct link to Sheryian Website</a>
    Github Repo link        :       <a href="https://github.com/nileshchakkarwar/js-fullstack">Github: RepoName: js-fullstack</a>     
    [Old] Gitlab Repo link  :       <a href="https://gitlab.com/nileshchakkarwar/nodejs-sheryians">Gitlab:nodejs-sheryians</a>
</pre>
<pre>
<a href="#sheryians-node-backend-domination" style="float:right">Top</a>
    Good colors hex         
        - netural to blue     :       #F5EFE6 #E8DFCA #AEBDCA #7895B2
        - neturals to beige   :       #FDEFEF #F4DFD0 #DAD0C2 #CDBBA7         
    Color pallet            :       <a href="https://colorhunt.co/palettes/popular">https://colorhunt.co/palettes/popular</a>
    HTML playground         :       <a href="https://developer.mozilla.org/en-US/play">https://developer.mozilla.org/en-US/play</a>
</pre>

## forLoop all variation
<pre>
<a href="#sheryians-node-backend-domination" style="float:right">Top</a>
    for:
        desc:	General purpose
        arr:   	for(let I; i< array.lenght;i++){}
        obj:	for(let I; I< Object.keys(anyObject); i++){}

    for-of:
        desc:	preferred for value extraction
        arr:	for(let elm of array){}
        obj: 	for(let [k,v] of Object.entries(anyObject)){}
        
    for-in
        desc:	preferred for key extraction!
        arr:	for(let x in arrOfChars){} will return index as they are the keys of arrays!
        obj:	for(let key in anyObject){}

    forEach
        desc:	use mostly in UI; doesn't return anything 😒
        arr: 	arrOfChars.forEach((elm,i) => console.log(elm)); 
        obj:	NA❌

    map	
        desc:	want output use map instead of forEach
        arr: 	arrOfChars.map(elm=> elm+'anyOperation'); 
        obj:	NA❌
</pre>

## node vs nodemon
<pre>
<a href="#sheryians-node-backend-domination" style="float:right">Top</a>
    nodemon
        - a dev dependancy
        - <b><i>npm install nodemon --save-dev</b></i> to indicate as dev env only and not required in prod env

    How to run?
        - node <i>path-to-app-server-file</i>
        - <b>NPX</b> nodemon <i>path-to-app-server-file</i>

    Benefit of nodemon over node
        - if not nodemon then we have to 
        - stop the node server cntrl+c
        - run the node <i>path-to-app-server-file</i> command to reload the server

    Working logic
        - as soon as we save the file the change is detected by nodemon and server is reloaded
</pre>

## http server vs express server
<pre style="background-color:#F0EBE3">
<a href="#sheryians-node-backend-domination" style="float:right">Top</a>
        - JS is a single threaded webserver
        - By doing using <b>http.createServer()</b> we are formally defining the thread that will always 
          be ready to accept any requests directed towards it

        - req ➡️ node ➡️ rsp
            - req and rsp are terminologies that are always in context of server.
            - requesting a server
            - response from a server
</pre>
    
###- HTTP Server Code Reference
<pre>
<a href="#sheryians-node-backend-domination" style="float:right">Top</a>
    <code class="language-js line-numbers">
        const http = require('http');

        const server = http.createServer((req, res) => {
            res.statusCode = 200;
            res.setHeader('Content-Type', 'text/plain');
            res.end('Hello World\n');
        });

        server.listen(3000);
    </code>
</pre>

###- Express Code Reference
<pre>
<a href="#sheryians-node-backend-domination" style="float:right">Top</a>
    <code class="language-js line-numbers">
        const express = require('express');
        const app = express();
        const port = 3000;

        app.get('/', (req, res) => {
          res.send('Hello World!');
        });
    </code>
</pre>

## status codes
<pre>
<a href="#sheryians-node-backend-domination" style="float:right">Top</a>
    Informational: 
        100 - Basic acknowledgement
        101 - Indicates change of protocol, say from http to webRTC or udp or FTP
    
    -----------------------------------------------------------------------------------------
    Success: 
        200 - OK status, all good and nothing remains to be sent from server side
        201 - create a resource on DB/server, eg post, reply comment
            - has either response body/ location header
        202 - Accepted ur request, working on it will update the final result
            - eg async request might take time 
            - eg facebook server has to fetch some data from whatsapp, at that time the user is notified with 202
        203 - Forwarded to other server that will work on it;
            - If a proxy server caches a webpage and returns the cached version instead of 
              retrieving it from the original server, it might use a 203 status code to indicate this.
            - Request forwarded to third party or
            - request forwarded to another server in distributed system
        204 -  No Content
    
    -----------------------------------------------------------------------------------------
    Redirect: 
        301 v/s 308 - Moved Permanently
                    - Eg: www.facebook.com ->301-> meta.com
                    - 308 enforces the original request method, while 301 allows for a change in method
        302 v/s 307 - Temp redirect
                    - 307 enforces the original req while 302 might update the req from post to get
                    - In cases where a request requires authentication or authorization 
                    - Eg: a 307 redirect can be used to direct users to a login page while preserving the original request method. 
                    - Or when url is undermaintenance
    
    -----------------------------------------------------------------------------------------
    User Errors:
        400 - Bad Request; Generic error code
        401 - Unauthorized; Access Token expired or required
        403 - Forbidden, u have valid token but u cann't access this resource
            - User-1 asking data about User-2 private information
        404 - Not found
    
    -----------------------------------------------------------------------------------------
    Server Errors:
        500 - Generic error; Internal Server error
        502 - Bad gateway!
            - proxy receiving invalid response from the upstream server 
        503 - Service Unavailable
            - Load on server
            - 1 service within microservice ecosystem failed
</pre>

## import vs require

|Feature|require|import|
|-|-|-|
|New vs old           |OLD                    |Modern   |
|Module System        |CommonJS               |ES Modules (ESM)|
|Execution            |Runtime (synchronous)  |Compile-time (asynchronous)|
|Environment          |Node.js                |Modern JS (Node + Browser)|
|Top-level use        |Can use anywhere       |Must be at the top level|
|Dynamic loading      |Easy (require())       |Use import() for dynamic|


###- import ; multiple imports ; require
<pre>
<a href="#sheryians-node-backend-domination" style="float:right">Top</a>
<code class="language-js line-numbers">
        import fs from 'fs';
        
        //---------------------------------------
        
        import {
            foo, bar,
          } from './myModule.js';

        //---------------------------------------
        
        import {
            reallyLongFunctionName as shortName,
            anotherOne as ao
          } from './utils.js';

        //---------------------------------------

        const fs = require('fs');     
</code>
</pre>

## middleware
<pre>
<a href="#sheryians-node-backend-domination" style="float:right">Top</a>
    <div style="background-color:#FEE7E7">
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
    </div>
</pre>

###- <strong>HTTP Server Code Ref:</strong>
<pre>
<a href="#sheryians-node-backend-domination" style="float:right">Top</a>
    <code class="language-js line-numbers">
        const express = require('express');
        const app = express();

        function middleFunc1(req, res, next) {
            console.log('In middleFunc1');
            next(); // to continue the flow, if not mentioned then request will stand here only
        }

        function middleFunc2(req, res, next) {
            console.log('In middleFunc2');
            next();
        }

        function middleFunc3(req, res, next) {
            console.log('In middleFunc3');
            next();
        }

        app.use(middleFunc2, middleFunc1);

        app.get('/', (req, res) => {
            res.send('Testing Middleware');
        })

        app.listen(3000);
    </code>
</pre>


### sessions
<pre>
<a href="#sheryians-node-backend-domination" style="float:right">Top</a>
- Session vs cookies❓
    - A temp datastore
    - Stays only till the server is up and running
    - other words if server restarted then the session is wiped out
    - Cookies are for Frontend where as sessions are for backend

- Caution with session⚠️
    - Since after restart they vanish, need to be careful

- Usecase
    - EG Say you want to send data from 1 process to other process or 1 program to other
    - In that case u create a temp file write to file and read that file
    - session is just like that file but in-memory file
</pre>

####- How to use sessions in code
<pre>
    <code class="language-js line-numbers">
    const express = require('express');
    const app = express();
    const expressSession = require('express-session');

    const session = expressSession({
        secret: 'gfg-key',      // encrypt the session on server
        resave: false,          // don't save session if unmodified
        saveUninitialized: true // don't create session until something 
                                   // stored eg if user just visits the page wihtout loging in
    });

    app.use(session); // use session in express app

    app.get('/', (req, res) => {
        // check if session is already created
        if (req.session.views) {
            req.session.views++;
            res.send(`You have visited this page ${req.session.views} times`);
        } else {
            req.session.views = 1;
            res.send('Welcome to the session demo. Refresh!');
        }
    }
    );
    </code>
</pre>
##=-=-=-=-=-=-=-=
<pre>
<a href="#sheryians-node-backend-domination" style="float:right">Top</a>
<hr style="height:.5px;background-color:black">
</pre>