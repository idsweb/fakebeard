var express = require('express');
var app = express();

app.use(express.static('public'));

app.get('/', function(req, res){
    res.send('welocome to the index page...');
});

app.get('*', function (req,res) {  
    res.status(404).send('These arent the files your looking for');
});

app.listen(3000, function () {  
    console.log("Were listenig....");
});