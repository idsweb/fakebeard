Node
====
Node.js® is a JavaScript runtime built on Chrome's V8 JavaScript engine. Node.js uses an event-driven, non-blocking I/O model that makes it lightweight and efficient. 

To get started create a directory and use Node Package Manager to initialize a Package.

1. `MKDIR NodeHello`
2. `CD NodeHello`
3. `npm init`

You can accept all the defaults, enter *app* the name of the main JavaScript file in the package.json that npm uses. Accept all the other defaults.

```javascript
{
  "name": "nodehello",
  "version": "1.0.0",
  "description": "This is my first node sample",
  "main": "app.js",
  "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1"
  },
  "author": "",
  "license": "ISC"
}
```
Add a file called app.js and enter the text below: 

```javascript
console.log("Hello World");
```
To run it type

`node app`

This prints  `Hello World` and voila your first Node.js application.

Adding a Node module
--------------------
npm package manager lets you create and manage node modules in packages. Create a directory within node_modules for your module.

```
mkdir node_modules
cd node_modules
mkdir greetmodule
cd greetmodule
npm init
```
Add file called index.js and add the code below

```javascript
exports.greet = function(){
    console.log('Hello World');
}
```
cd back to the main folder and alter server.js as below to import your module (using the folder name)

```javascript
var greetmodule = require('greetmodule');
console.log(greetmodule.greet())
```
Restart the server and see the module output
```
Ctrl '
Node server
```
You should see the output from your module

Hello world HTML
----------------
You can create a basic http server and serve content using the core http module

Edit server.js

```javascript
var http = require("http")

http.createServer(function(req, res){
    res.writeHead(200, {'Content-Type':  'text/plain'});
    res.end('Hello World');
}).listen(3000);
```
restart the server, and go to localhost:3000 (Ctrl + c to stop the server listening)

