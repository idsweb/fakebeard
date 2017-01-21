mkdir nunjucks101
cd nunjucks101
npm init

enter server.js as the main script

npm install express --save
npm install nunjucks --save

mkdir views
create an index.html html file (use html:5 in vs code)

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

create server.js

optionally add typescript intellisense in vs code for express
npm install --save @types/express
optionally install nodemon npm install nodemon (type nodemon at the terminal to watch)

'''javascript
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

Launch a browser and go to localhost:3000

Alter index.html and add this html to the body
This is the welcome message {{ message }}

Alter server.js
app.get('/', function (req, res) {  
    res.render('Index', { message : 'Hello World' })
});

Includes
--------
Add a file called footer.html to the views folder, add some html
<div>
    <p> This is the footer </p>
</div>
Alter Index.html and add the footer Includes
{% include "footer.html" %}
Inheritance
-----------
Add another file called layout.html, add the text below to replace all content
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
Alter Index.html to the text below
{% extends "layout.html" %}
Save and restart the server (rs if using nodemon)
Add block sections
------------
Alter layout.html as below
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
And alter index.html as below
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
Restart the server
Filters (for-each)
------------------
Add a node module for mock data
cd node_modules
mkdir dataservice
cd dataservice
npm init (accept defaults)
add index.js
Add this code
exports.getNews = function(){
    return // copy and paste the JSON from the MOCK_NEWS.json file in assets
}
CD ../..
Add a route for the news to server.js (notice the news array is the value of the news object)
app.get('/news', function (req, res) {
    var news = dataservice.getNews();
    res.render('news', { news: news} );
})
Add a news.html file
TIP see this post for debugging https://code.visualstudio.com/docs/runtimes/nodejs
Click the debug icon and then the gear (cog) and select node as language (dont forget to stop nodemon)
Add a html file for the news in views
<h1>Posts</h1>
<ul>
{% for item in news %}
  <li>{{ item.title }}</li>
{% else %}
  <li>This would display if the 'item' collection were empty</li>
{% endfor %}
</ul>