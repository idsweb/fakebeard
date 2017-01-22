
Nunjucks
========
[Nunjucks](https://mozilla.github.io/nunjucks/)
A rich and powerful templating language for JavaScript (like EJS).

Steps are:
1. Create an express web application
2. Plug in the Nunjucks template engine

Express web application
-----------------------
```
mkdir nunjucks101
cd nunjucks101
npm init
```
Enter server.js as the main script during the npm init wizard, accept everything else, then add express and nunjucks
```
npm install express --save
npm install nunjucks --save
```
Create the server.js file

optionally add typescript intellisense in vs code for express
```
npm install --save @types/express
```
optionally install nodemon 
```
npm install nodemon (type nodemon at the terminal to watch)
```
Edit the server.js file

The key bit is the **nunjucks.configure** method

```javascript
var express = require("express")
var nunjucks = require("nunjucks")

var app = express()

app.set('view engine', 'html')

nunjucks.configure('views', {
    autoescape: true,
    express: app
});

app.get('/', function (req, res) {  
    res.render('Index')
})

app.listen(3000, function () {
    console.log("were listening")
})
```
Plugin the Nunjucks template engine
-----------------------------------
We will create a views folder for our nunjucks templates
```
mkdir views
```
create an index.html html file (use html:5 in vs code)
```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>This is the index page</title>
</head>
<body>
    Index page
</body>
</html>
```
Start the serve (```node server``` or ```nodemon```) and launch a browser and go to localhost:3000

Ctrl + c to stop the server

Alter index.html and add this html to the body
```html
This is the welcome message {{ message }}
```
Alter server.js and add an express route for the index ('/'), this passes in a JSON object as a second parameter
```javascript
app.get('/', function (req, res) {  
    res.render('Index', { message : 'Hello World' })
});
```
Includes
--------
Nunjucks lets you manage your templates with inheritance (see later) and includes.
Add a file called **footer.html** to the views folder, add some html
```html
<div>
    <p> This is the footer </p>
</div>
```
Alter Index.html and add the footer Includes
{% include "footer.html" %}
Inheritance
-----------
Add another file called layout.html, add the html below
```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Document</title>
    <style type="text/css">
    body {
        margin: 0px;
    }
    .heading, .footer {
        background-color: #000;
        color: #fff;

    }
    .left{
        background-color: #ccc;
        width: 30%;
        float:left;
    }
    .right{
        background-color: cadetblue;
        width: 70%;
        float:left;
    }
    </style>
</head>
<body>
    <div class="heading">Heading</div>
    <div class="left">Left</div>
    <div class="right">Right</div>
    <div class="footer">
        {% include "footer.html" %}
    </div>
</body>
</html>
```
Now alter Index.html to the text below
```html
{% extends "layout.html" %}
```
Save and restart the server (rs if using nodemon)
Inheritance
-----------
Nunjucks lets you modularise your templates through inheritance.

Create a main html file for your common layout.
```html
    <div class="heading">
        {% block heading %}
        {% endblock %}
    </div>
    <div class="left">
        {% block left %}
        {% endblock %}
    </div>
    <div class="right">
        {% block right %}
        {% endblock %}
    </div>
```
And alter index.html as below
```html
{% block heading %}
    This is the heading
{% endblock %}

{% block left %}
    This is the left block
{% endblock %}

{% block right %}
    TH
    his is the right block
{% endblock %}
```
Restart the server
Filters (for-each)
------------------
Add a node module for mock data
```
cd node_modules
mkdir dataservice
cd dataservice
npm init
``` 
accept the defaults from the npm wizard
add an index.js file
Add this code to make a function that returns an array of objects
```javascript
exports.getNews = function(){
    return // copy and paste the JSON from the MOCK_NEWS.json file in assets
}
```
In the server.js file add a route for the news to server.js (notice the news array is the value of the news object)
```javascript
app.get('/news', function (req, res) {
    var news = dataservice.getNews();
    res.render('news', { news: news} );
})
```
Add a news.html file (TIP: see this post for debugging https://code.visualstudio.com/docs/runtimes/nodejs). 
Add a html file for the news in views and add the html below
```html
<h1>Posts</h1>
<ul>
{% for item in news %}
  <li>{{ item.title }}</li>
{% else %}
  <li>This would display if the 'item' collection were empty</li>
{% endfor %}
</ul>
```
Now restart the server and go to http://localhost:3000/news

There is much more you can do with Nunjucks - check out the [documentation](https://mozilla.github.io/nunjucks/)