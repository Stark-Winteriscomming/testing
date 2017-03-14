// var http = require('http');
// var fs = require('fs');
// var socketio = require('socket.io');
//
// var server = http.createServer(function(req, res){
//         fs.readFile('./public/index.html', function(err, data){
//         res.writeHead(200, {'Content-Type':'text/html'});
//         res.end(data);
//     });
// }).listen(3001, function(){
//     console.log('Running ~~~~~~~~~~~~');
// });
//
// var io = socketio.listen(server);
// io.sockets.on('connection', function(socket){
//         socket.on('sMsg', function(data){
//         io.sockets.emit('rMsg', data);
//     });
// });

//commet
var express = require('express');
var app  = express();
var bodyParser  = require('body-parser');
//
app.use(bodyParser.urlencoded({
  extended: true
}))
app.use(express.static('public'));

app.post('/posting',function(req, res){
  res.send(req.body.subject + ',' + req.body.content);
})
// app.use(express.bodyParser());
// app.use(bodyParser.json());
// app.use(bodyParser.urlencoded({
//   extended: true
// }));
app.set('view engine','jade');
app.set('views','./views');
app.locals.pretty = true;
app.post('/endpoint', function(req, res){
	//var obj = {};
	//console.log('body: ' + JSON.stringify(req.body));
	//res.send(req.body);
  console.log(req.body);
  // console.log(JSON.stringify(req.body));
  io.sockets.emit('rMsg','manager gift');

;});
app.get('/form', function(req, res){
    res.render('form');
})
app.get('/queryString/:num/:mode',function(req, res){
    const language = [
      'javascript',
      'jquery',
      'nodejs'
    ]
    res.send(
      language[req.params.num]+','+
      language[req.params.mode]
      );
    // res.send(req.query.id);
})

app.listen(3000, function(){
  console.log('success');
});
// NETSH WINSOCK RESET
