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

prints  `Hello World` and voila your first Node.js application.

