Node 101 walkthrough script
===========================
mkdir binnit
cd binnit
npm init
set main to server.js
code .
Add server.js
Add to file
'''javascript
console.log('Hello World')
'''
Ctrl ' for terminal
node server
Ctrl c
mkdir greetmodule
cd greetmodule
npm init
Add file greetmodule.js
'''javascript
exports.greet = function(){
    console.log('Hello World');
}
'''
cd ..
Alter server.js
'''javascript
var greetmodule = require('greetmodule');
'''
Ctrl '
Node server
Ctrl c
Edit server.js
```javascript
var http = require("http")

http.createServer(function(req, res){
    res.writeHead(200, {'Content-Type':  'text/plain'});
    res.end('Hello World');
}).listen(3000);
```
Ctrl ' node server
Ctrl + c
