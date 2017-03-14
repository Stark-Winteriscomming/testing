var express = require('express');
var app  = express();
// var app = require('express')();
var http = require('http').Server(app);
var bodyParser  = require('body-parser');

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
  socket.on('chat message', function(msg){
    console.log('message: ' + msg);
  });
  // console.log('a user connected');
});
// socket.on('chat message', function(msg){
//    console.log('message: ' + msg);
//user disconnect
// io.on('connection', function(socket){
//   console.log('a user connected');
//   socket.on('disconnect', function(){
//     console.log('user disconnected');
//   });
// });

// io.on('connection', function(socket){
//   socket.on('chat message', function(msg){
//     io.emit('chat message', msg);
//   });
// });

app.get('/', function(req, res){
  // res.send('good');
  // res.sendFile('public/client.html');
  res.sendFile('public/client.html' , { root : __dirname});
})

app.get('/getProblem/:id',function(req, res){
  io.emit('chat message','server\'s word');
  console.log(req.params.id);
})
app.post('/posting',function(req, res){
  res.send(req.body.subject + ',' + req.body.content);
})
// app.use(express.bodyParser());
// app.use(bodyParser.json());
// app.use(bodyParser.urlencoded({
//   extended: true
// }));

// app.post('/endpoint', function(req, res){
// 	//var obj = {};
// 	//console.log('body: ' + JSON.stringify(req.body));
// 	//res.send(req.body);
//   console.log(req.body);
//   // console.log(JSON.stringify(req.body));
//   io.sockets.emit('rMsg','manager gift');
//
// ;});
//
// app.get('/form', function(req, res){
//     res.render('form');
// });

// NETSH WINSOCK RESET
