Web applications with Nodejs and Express
========================================
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
Create a file called server.js and enter the snippet below:
```javascript
var express = require('express');
var app = express();

app.listen(3000, function () {  
    console.log("Were listenig....");
});
```
Launch a browser and go to http://localhost:3000. You should get a message saying there is no get defined.

Press Ctrl+C to quit the Node applicaiton (on Windows) and add the snippet below in server.js before app.listen
```javascript
app.get('/', function(req, res){
    res.send('welocome to the index page...');
});
```
Run node server again and refresh the page, you should see the text above.

add another directory and add a text file hello.txt
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



