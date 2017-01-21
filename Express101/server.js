var express = require('express');
var app = express();

app.use(express.static('public'));

app.use(function (req, res, next) {
  console.log('Time:', Date.now())
  next()
})

app.get('/', function(req, res){
    res.send('welocome to the index page...');
});

app.get('/users/:userid', function (req, res) {
    res.send(req.params); //{"userid":"ian"}
});

app.get('/api/users',function (req, res) {
    res.he
    res.json({
        users: [
            {
                name:'Ian'
            },
            {
                name:'Rod'
            },
            {
                name:'Paul'
            }]
        }
    );
})

app.get('/api/users/:userid', function (req, res) {
    res.json({
        name:'Ian',
        link:req.url,
        dob:'05/06/19**'
    })
});

/* Note: you need to add these in order, least specific last*/
app.get('*', function (req,res) {  
    res.status(404).send('These arent the files your looking for');
});

app.listen(3000, function () {  
    console.log("Were listenig....");
});