Web applications with Nodejs and Express
========================================
Set up
------
Set up the initial folder structure....
```
MKDIR yoursite
CD yoursite
npm init
```
Accept the defaults but set the entry point to be server.js (this is not essential but it means npm start will launch your application be default).
Next install express
```
npm install express --save
```
A simple web application
-------------------------
var express = require('express');
var app = express();

app.listen(3000, function () {  
    console.log("Were listenig....");
});
```
Launch a browser and go to http://localhost:3000. You should get a message saying there is no **get route defined**. We will fix that with middleware.

Press Ctrl+C to quit the Node applicaiton (on Windows)

Middleware
----------

Express is a routing and middleware web framework that has minimal functionality of its own: An Express application is essentially a series of middleware function calls.

Middleware functions are functions that have access to the request object (req), the response object (res), and the next middleware function in the application’s request-response cycle. The next middleware function is commonly denoted by a variable named next.

Bind application-level middleware to an instance of the app object by using the app.use() and app.METHOD() functions, where METHOD is the HTTP method of the request that the middleware function handles (such as GET, PUT, or POST) in lowercase.

Add the snippet below in server.js before app.listen, this uses the app.use() method and will run on every request and then pass on to the next 
```javascript
app.use(function (req, res, next) {
  console.log('Time:', Date.now())
  next()
})
```

Add the snippet below in server.js before app.listen, this uses the app.METHOD (for a HTTP GET) to handle a get request to the root. This is specified by the path '/'.
```javascript
app.get('/', function(req, res){
    res.send('welocome to the index page...');
});
```
Run node server again and refresh the page, you should see 'welocome to the index page...', as well as the date and time in the console.

Static files
------------
add another directory for static files and add a text file hello.txt (notice we dont have an app method for this).
```
mkdir public
cd public
echo hello > hello.txt
cd ..
```
Now run the server again and go to http://localhost:3000/hello.txt and notice the error message. 

Add the javascript below
```javascript
app.use(express.static('public'));
```
Notice that the public directory is not part of the url e.g. public/images would /images

Tip: you can add a generic 404 using something like below:
```javascript
app.get('*', function (req,res) {  
    res.status(404).send('These arent the files your looking for');
});
```



