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
'''
npm install --save @types/express
