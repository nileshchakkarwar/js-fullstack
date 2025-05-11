<pre>
nodemon
    - a dev dependancy
    - npm install nodemon --save-dev to indicate as dev env only and not required in prod env

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