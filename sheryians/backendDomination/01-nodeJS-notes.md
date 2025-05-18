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
      - [express-session](#express-session)
      - [connect-flash](#connect-flash)
      - [CORS](#cors)
      - [cookie-parser](#cookie-parser)
      - [morgan](#morgan)
      - [static](#static)
  - [req \& res](#req--res)
  - [EJS - Server Side Rendering](#ejs---server-side-rendering)
  - [=-=-=-=-=-=-=-=](#-------)



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
    1. Good colors hex
       1. netural to blue     :       #F5EFE6 #E8DFCA #AEBDCA #7895B2
       2. neturals to beige   :       #FDEFEF #F4DFD0 #DAD0C2 #CDBBA7
    2. Color pallet           :       <a href="https://colorhunt.co/palettes/popular">https://colorhunt.co/palettes/popular</a>
    3. HTML playground        :       <a href="https://developer.mozilla.org/en-US/play">https://developer.mozilla.org/en-US/play</a>
</pre>

## forLoop all variation
<pre>
<a href="#sheryians-node-backend-domination" style="float:right">Top</a>
    for:
        desc:	General purpose
        arr:   	for(let i; i< array.lenght;i++){}
        obj:	for(let i; i< Object.keys(anyObject); i++){}

    for-of:
        desc:	preferred for value extraction
        arr:	for(let elm of array){}
        obj: 	for(let [k,v] of Object.entries(anyObject)){}
        
    for-in:
        desc:	preferred for key extraction!
        arr:	for(let x in array){} will return index as they are the keys of arrays!
        obj:	for(let key in anyObject){}

    forEach:
        desc:	use mostly in UI; doesn't return anything 😒
        arr: 	array.forEach((elm,i) => console.log(elm)); 
        obj:	NA❌

    map:	
        desc:	want output use map instead of forEach
        arr: 	array.map(elm=> elm+'anyOperation'); 
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
<pre>
<a href="#sheryians-node-backend-domination" style="float:right">Top</a>
Difference process v/s thread v/s worker thread?
    - process       : 
                    - OS defination of work is process
                    - process can have sub-process that can have threads under it
    - thread        :
                    - sub unit of work under process is thread
                    - hence threads don't have memory access outside a process
                    - threads cannot have sub threads
    - worker thread :
                    - there is no hierarchy, no children only siblings
                    - worker thread and thread is same
                    - only difference is the worker thread works in background (demon)
<hr>
Some core idea:
    - JS is a single threaded webserver that uses worker threads with non blocking I/O
    - LibUV is a C++ library that does the magic for JS
    - By doing using <b>http.createServer()</b> we are formally defining the thread that will always 
          be ready to accept any requests directed towards it
<hr>
Doesn't Django and other applications use threads?
    - Django uses a multi thread model
    - meaning that Django spawns multiple threads (worker threads in advance)
    - each request is assigned to a worker in thread pool
    - hence the ounce of management is on the framework - Django
    - where as in JS frameworks like Express just have to deal with the main thread!!
<hr>
GIL and how it gets bypassed:
    - Global Interpreter lock is a mechanism that limits the parallel execution of threads under a process
    - Hence when django reaches the GIL limit it spawns a new child process and that process spawns threads
<hr>
Flow of request once it reaches node server:
    - req ➡️ node ➡️ rsp
      - req and rsp are terminologies that are always in context of server.
      - requesting a server
      - response from a server
</pre>
    
<h4 style="text-align:center">HTTP Server Code Reference</h4>

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

<h4 style="text-align:center">Express Code Ref with Catch-all provision</h4>

<pre>
<a href="#sheryians-node-backend-domination" style="float:right">Top</a>
    <code class="language-js line-numbers">
    const express = require('express');
    const app = express();

    app.get('/profile/:username', (req,res)=>{
      res.send(`This is the username entered in URL - ${req.params.username}`);
    });

    // this is catch-all route
    app.use((req, res) => {
        res.status(404).send("Looks like * that is wildcard char is replaced with app.use");
    });

    // old catch-all route used to be as below
        // app.get("*",(req, res) => {
        //     res.status(404).send("NO LONGER in USE!!");
        // });


    app.listen(3000);
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


<h4 style="text-align:center">Code EG: import ; multiple imports ; require</h4> 
<pre>
<a href="#sheryians-node-backend-domination" style="float:right">Top</a>
<code class="language-js line-numbers">
    import fs from 'fs';        
----------------------------------------------          
    import {
        foo, bar,
        } from './myModule.js';        
----------------------------------------------
    import {
        reallyLongFunctionName as shortName,
        anotherOne as ao
        } from './utils.js';
----------------------------------------------
    const fs = require('fs');     
</code>
</pre>

## middleware
<pre>
<a href="#sheryians-node-backend-domination" style="float:right">Top</a>
    How to identify middleware function?
        - Any function that has access to req, res, next is a middleware function

    Then does app.get(route, handler) has access to req, res, next?
        - yes it does, then what is difference between this and middleware?
        - middleware is a super set of which routes are a subset!
        - so every route function is middleware

    Why? - need of middleware
        - Eg Kafka is middleware but in terms of node middleware is bit different
        - think of it as a hook
        -  The flow is as below
            - req originates from browser ➡️ middleware ➡️ route functions ➡️ route handlers function

    Usecases of middleware.
        - Authentication and Authorization
        - Every request needs to be Authenticated
        - Middleware does the Authentication and adds a access token or bearer token to EACH request
        - Its like request has to pass defined middleware functions to reach route functions
        - Think of it similar fixtures in playwright that run before each testcase
        - ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
        - check something before it reaches the route function
        - add something to the request before it reaches the route function use middleware
</pre>

<h4 style="text-align:center">How to USE middleware</h4>

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

        app.use(middleFunc2, middleFunc1); // this is where node knows what middleware are to be used

        app.get('/', (req, res) => {
            res.send('Testing Middleware');
        })

        app.listen(3000);
    </code>
</pre>

#### express-session
<h4 style="text-align:center">sessions</h4>

<pre>
<a href="#sheryians-node-backend-domination" style="float:right">Top</a>
- Session vs cookies❓
    - A temp datastore
    - Stays only till the server is up and running
    - in other words if server restarted then the session is wiped out
    - Cookies are for Frontend where as sessions are for backend

- Caution with session⚠️
    - Since after restart they vanish, need to be careful with nodemon

- Usecase
    - EG Say you want to send data from 1 process to other process or 1 program to other
    - In that case u create a temp file write to file and read that file
    - here the process is routes say /post route wants to send something to /get route it will use session
    - session is just like that file but in-memory file
</pre>

<h4 style="text-align:center">How to use sessions in code</h4>

<pre>
<a href="#sheryians-node-backend-domination" style="float:right">Top</a>
<code class="language-js line-numbers">
       const express = require('express');
       const app = express();
       const expressSession = require('express-session');
       const session = expressSession({
            secret: 'gfg-key',          // encrypt the session on server
            resave: false,              // don't save session if unmodified
            saveUninitialized: true     // don't create session until something 
            });                         // stored eg if user just visits the page wihtout loging in
        

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

#### connect-flash
<h4 style="text-align:center">session vs flash in session</h4>

<pre>
<a href="#sheryians-node-backend-domination" style="float:right">Top</a>
    1. Session
       1. Library name: <b><i>express-session</i></b>
       2. Session stores data on server for the SAME USER across MULTIPLE requests
    2. Flash Session
       1. Library name: <b><i>connect-flash</i></b>
       2. Temp storage mechanism within a session
       3. Data is avilable only for next request and it is cleared!
       4. Best usecase 
          1. User enters wrong creds, 
          2. user should be redirected to same page with error message
          3. After that the message is removed from session
</pre>

<h4 style="text-align:center">Code snippet:session vs flash</h4>

<pre>
<a href="#sheryians-node-backend-domination" style="float:right">Top</a>
    <code class="language-js">
        const express = require('express');
        const app = express();
        const session = require('express-session');
        const flash = require('connect-flash');
        // setting up session middleware----------------------------
        const sessionMiddleware = session({
            resave: false,
            saveUninitialized: false,
            secret: "some temp secret"
        });
        // setup flash middleware------------------------------------
        const flashMiddleware = flash();
        // Middleware to set up session and flash messages----------
        app.use(sessionMiddleware, flashMiddleware);
        // Route function to set up flash messages------------------
        app.get('/flash', (req, res) => {
            req.flash('info', 'Flash is back!');
            res.redirect('/show-flash');
        });
        // Route function to show flash messages--------------------
        // This route will be called after the flash message is set
        app.get('/show-flash', (req, res) => {
            const flashMessages = req.flash('info');
            res.send(flashMessages);
        });
        // flash message is empty this time coz it is already consumed--
        app.get('/try-access-flash-again', (req, res) => {
            const flashMessages = req.flash('info');
            res.send(flashMessages);
        });

        app.listen(3000);
</code>
</pre>

#### CORS
<h4 style="text-align:center">CORS</h4>

<pre>
<a href="#sheryians-node-backend-domination" style="float:right">Top</a>
What is CORS:
    - Cross Origin Resource Sharing
    - Unlike earlier webserver where the froentend and backend used to sit on same domain
    - eg: https://my-domain.com
    - today the froentend can sit on https://a-domain.com
    - and backend can sit on https://b-domain.com
    - how will application know that a-domain is the actual froentend for the application
    - here we enable cors enabled in backend application to accept request from a-domain
    - we can keep it open to all or even restrict the access
      - Without CORS            : No one gets in except the host.
      - With unrestricted CORS  : Everyone is welcome.
      - With selective CORS     : Only invited or whitelisted guests can enter.
</pre>

<h4 style="text-align:center">Code Snippet : CORS</h4>

<pre>
<a href="#sheryians-node-backend-domination" style="float:right">Top</a>
    <code class="language-js line-numbers">
        Access-Control-Allow-Origin: http://foo.example             // What domain is allowed
        Access-Control-Allow-Methods: POST, GET                     // What method is allowed
        Access-Control-Allow-Headers: X-PINGOTHER, Content-Type     // What header is allowed
        Access-Control-Max-Age: 86400
    </code>
<hr>
    <code class="language-js line-numbers">
        const express = require('express');
        const cors = require('cors');

        const app = express();

        // Define allowed origins
        const allowedOrigins = ['https://mytrustedwebsite.com', 'https://anothertrustedsite.com'];

        app.use(cors({
          origin: function (origin, callback) {
            if (!origin || allowedOrigins.includes(origin)) {
              callback(null, true); // Allow request
            } else {
              callback(new Error('Not allowed by CORS')); // Block request
            }
          }
        }));

        app.get('/data', (req, res) => {
          res.json({ message: 'Selective CORS is working!' });
        });

        app.listen(3000, () => console.log('Server running on port 3000'));
    </code>
</pre>

#### cookie-parser
<h4 style="text-align:center">Cookies Fundamentals</h4>

<pre>
<a href="#sheryians-node-backend-domination" style="float:right">Top</a>
Useful cookie chromium browser extension.
    - Recommendation is to use <b><i>EditThisCookie</i></b>
<hr>
What are cookies?
    - Just like the session that store temp data on server cookies store temp data on 
      browser or client (mobile app)
    - eg:
      - How does youtube know that last time where did I stop the video or on what 
        number was the user on the playlist
      - this is achieved via cookies
      - cookies play a major role in mobile applications
<hr>
Cookies and its scope?
    - Domain Scope                      :
                                        - On <i>example.com</i> level if configured properly it can be used on 
                                          <i>sub.example.com</i>
    - Path Scope                        :
                                        - A cookie set for /dashboard won't be accessible from /profile
    - Session vs Persistant Cookies     :
                                        - Session Cookie is valid only till browser is kept open
                                        - Persistant Cookie is stored till predefiend expiration time
    - SameSite Attribute                :
                                        - Restricts cookies to be sent accross different sites
    - Secure and HTTPOnly Flag          :
                                        - Secure cookies are transmitted only over HTTPs
                                        - where as HTTPOnly CANNOT be accessed via JavaScript!!
<hr>
How backend gets access to cookies?
    - As we see for every request we have access to the desired scope of cookies
    - even if the object contains cookies the are not directly accessible until we parse them
    - here we use cookie parser module
<hr>
Cookie configuration options:
    - <a href="../backendDomination/02-images/cookiesAndOptions.png">EditThisCookie option to demo various configurations for cookies</a>
    - Note the configurable options such as :
                                            - value
                                            - domain
                                            - path
                                            - expiration
                                            - hostonly
                                            - session
                                            - secure
                                            - HttpOnly 
</pre>


<h4 style="text-align:center">Code Reference : Getting & Setting Cookies</h4>

<pre>
<a href="#sheryians-node-backend-domination" style="float:right">Top</a>
<code class="language-js">
    const express = require('express');
    const cookiesParser = require('cookie-parser');

    const app = express();
    const port = 3000;

    app.use(cookiesParser());

    app.get('/', (req, res) => {
      res.send(`Avilable routes: 
        /setting-cookie, 
        /get-cookie, 
        /delete-cookie`);
    });

    app.get('/setting-cookie', (req, res) => {
      res.cookie('user', 'John Doe', { maxAge: 900000, httpOnly: true }); 
                //user is key and John Doe is value
                // maxAge is the time in milliseconds for which the cookie will be valid
                // httpOnly is a flag that makes the cookie inaccessible to JavaScript's Document.cookie API
                // and only the server can access it
      res.send('Cookie is set');
    });

    app.get('/get-cookie', (req, res) => {
      const user = req.cookies.user;   // note how here the **req** is used and cookie is available to each request 
      if (user) {
        res.send(`User cookie: ${user}`);
      } else {
        res.send('No user cookie found');
      }
    });

    app.get('/delete-cookie', (req, res) => {
      res.clearCookie('user');
      res.send('User cookie deleted');
    });

    app.listen(port);
</code>
</pre>

#### morgan
<h4 style="text-align:center">Intercept and Log the request - Morgan</h4>

<pre>
<a href="#sheryians-node-backend-domination" style="float:right">Top</a>
What is morgan?
    - While receiving request from froentend how do we ensure that the request is 
    - received correctly to the server
    - morgan is like the first middleware where the bare request is shown
<hr>
Various morgan configurations
    - combined        : Standard Apache combined log format, includes referrer and user-agent.
    - common          : Similar to combined but without referrer and user-agent.
    - dev             : Concise output with colored status codes, ideal for development.
    - short           : Shorter than combined, focusing on response times and status codes.
    - tiny            : Minimal output, logging only method, URL, status, content length, and response time.
    - custom formats  : Define your own format using tokens or functions.
    - stream          : Redirect logs to a file or external logging system.
    - skip            : Conditionally exclude logs based on request or response properties.
    - immediate       : Logs requests before the response is sent.
</pre>


<pre>
<a href="#sheryians-node-backend-domination" style="float:right">Top</a>
<code class="language-js">
    const express = require('express');
    const morgan = require('morgan');
    const app = express();
    const port = 3000;


    app.use(morgan('short'));
    app.get('/',(req,res)=>{
      res.send('Demo to view Morgan interceptor')
    })

    app.listen(port);

    // ::1 - GET / HTTP/1.1 304 - - 15.906 ms
</code>
</pre>

#### static
<h4 style="text-align:center">Static - Built-in Middleware</h4>

<pre>
<a href="#sheryians-node-backend-domination" style="float:right">Top</a>
Usecase:
    - <b>express.static()</b> is a built-in middleware function in Express.js that serves static files 
    - like HTML, CSS, JavaScript, images, and other assets. 
    - It helps deliver these files directly to the client without additional processing.
</pre>

## req & res
<h4 style="text-align:center">req details</h4>
<pre>
<a href="#sheryians-node-backend-domination" style="float:right">Top</a>
- Request is that comes from browsers to server. 
- It is big objects but below are few most used value
    - req.params  :   these are URL parameters
    - req.body    :   forms data
    - req.cookies :   authentication section|session is for backend|cookies for frontend
                  :   cookies store login info such as username, passwords etc
    - req.query   :   url having data e.g pageSize=3000
    - req.ip      :   client ip address
    - req.headers :   client system metadata such as host, os browser details client id, company etc
    - req.url     :   endpoint that is called (/ or /profile or etc)
    - req.method  :   https verb
</pre>

<h4 style="text-align:center">res details</h4>
<pre>
<a href="#sheryians-node-backend-domination" style="float:right">Top</a>
- Res that server sends back to the browser!!
</pre>

<h4 style="text-align:center">Static vs Dynamic Routing - Handling Variable paths</h4>
<pre>
<a href="#sheryians-node-backend-domination" style="float:right">Top</a>
- Usecase:
    - Creating different paths for each user is not efficient, /profile/nilesh /profile/sana etc
    - Creating /nilesh /sana and such user is inefficient
    - To handle this is called handling variable paths
<hr>
- Static Route:
    - The URL does not change and is manually set. For example, example.com/about always
      leads to the "About" page. 
    - These URLs are easy to read and good for pages that don't change often.
<hr>
- Dynamic Routes:
    - The URL can change based on user input or data. 
    - For example, example.com/user/123 might show details for user ID 123, 
      while example.com/user/456 shows info for user 456.
    - Dynamic routes are great for websites that have a lot of changing content, 
      like profiles, products, or posts.
<hr>
    <code class="language-js">
    const express = require('express');
    const app = express();
    // note even if the username is right in front in url it is accessed using
    // req.param.username
    app.get('/profile/:username', (req,res)=>{
        res.send(`This is the username entered in URL - ${req.params.username}`);
    });
    app.listen(3000);
    </code>
</pre>

## EJS - Server Side Rendering
<h4 style="text-align:center">Core Idea</h4>
<pre>
<a href="#sheryians-node-backend-domination" style="float:right">Top</a>
- What is rendering?
  - Taking raw data (htmls or css) and turning them into VISUALLY UNDERSTANDABLE
<hr>
- Need of templating?
  - Issue with HTML is that you cann't have dynamic values say 2+2 will never be 4
<hr>
- How templating works?
  - User writes html in .ejs file
  - <b>`<%= %>  for data`</b>
  - <b>`<%%>  for logic`</b>
  - As soon as templating engine finds above tag it RESOLVES those values
  - Generates a new html file who's value are resolved
  - That is send to the server
<hr>
- Difference b/w CSR and SSR?
  - CSR - Client side rendering
  - SSR -  Server Site rendering
  - React is CSR
  - Ask the question where is the final html getting created?
    1. In CSR 
      - EG: React
      - The bundle of data is sent to the client
      - Client resources are used to unzip the bundle and run the template engine
      - Create the final html and then display
    2. In SSR 
      - EG normal website built using EJS and Django etc
      - The templating engine sits on the server side
      - Server resources are used 
      - final html is sent to the client
<hr>
- What are views?
  - In express project we create a folder names VIEWS
  - This folder contains .ejs files
  - As we know ejs is nothing but html with super-power (templating)
<hr>

<code class="language-js">
    const express = require('express');
    const app = express();
    const port = 3000;
    // notify the express engine that use ejs template
    app.set('view engine', 'ejs');
    // instead of res.send since we want html indicate to render res.render
    app.get('/', (req,res)=>{
      res.render('index')        // we have not given path yet express know to search VIEWS folder
    })
    // ----- default route
    app.use((req, res)=>{
      res.send('You have entered a unknown url');
    })
    // ---------------------------------------------
    app.listen(port);
</code>
<a href="./02-images/ejs.viewsDir.error.png">IMG: Error if views folder is not defiend or render file is not defined</a>

</pre>

## =-=-=-=-=-=-=-=
<h4 style="text-align:center">=-=-=-=-=-=-=-=</h4>
<pre>
<a href="#sheryians-node-backend-domination" style="float:right">Top</a>
<hr style="height:.5px;background-color:black">
</pre>