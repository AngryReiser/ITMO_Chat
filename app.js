let app = require('express')();
let http = require('http').createServer(app);
let io = require('socket.io')(http);

app.get('/', function(req, res){
    res.sendFile(__dirname + '/index.html');
  });

http.listen(8000, function(){
  console.log('listening on :8000');
});

io.on('connection', function(socket){
    console.log('user connected: ' + socket.id);
  });