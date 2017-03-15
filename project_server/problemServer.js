var express = require('express');
var app  = express();
// var app = require('express')();
var http = require('http').Server(app);
var bodyParser  = require('body-parser');
var flag;

app.set('view engine','jade');
app.set('views','./views');
app.locals.pretty = true;
app.use(bodyParser.urlencoded({
  extended: true
}));
app.use(express.static('public'));
app.use(express.static('public'));

var server = app.listen(3000, function(){
  console.log('success');
});
var io = require('socket.io').listen(server);

//user connect
io.on('connection', function(socket){
  flag = false;
  socket.on('cm', function(msg){
    console.log('message: ' + msg);
    flag = true;
  });
  // console.log('a user connected');
});
//user disconnect
// io.on('connection', function(socket){
//   console.log('a user connected');
//   socket.on('disconnect', function(){
//     console.log('user disconnected');
//   });
// });


app.get('/', function(req, res){
  // res.send('good');
  // res.sendFile('public/client.html');
  res.sendFile('public/client.html' , { root : __dirname});
})

app.get('/getProblem/:id',function(req, res){
  io.emit('chat message','server\'s word flag: ' + flag);
  console.log(req.params.id);
})
app.post('/posting',function(req, res){
  res.send(req.body.subject + ',' + req.body.content);
})
