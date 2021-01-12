const config = require('./config');
const app = require('express')()
const http = require('http').createServer(app)
const io = require('socket.io')(http)
var client = require('socket.io-client');
var socket_other_server = client.connect(config.app.backup_server_address ,{secure: true}); //connection to other server

io.on('connection', socket => {
  console.log('Client connected!')
  socket.on('message', ({ timestamp, name, message }) => {
    // get current timestamp
    var currentdate = new Date()
    var timestamp = currentdate.getHours() + ":" + currentdate.getMinutes() + ":" + currentdate.getSeconds();
    io.emit('message', {timestamp, name, message })
    console.log("Message from client broadcasted: " + message);
    });

    socket.on('disconnect', () => {
    console.log('Client disconnected')
    })
  })


// Handle messages from the other server
socket_other_server.on('message',  ({timestamp, name, message }) =>{
  console.log('Message received from the other server '+ message);
  // send to all this server clients, attach current timestamp
  var currentdate = new Date()
  var timestamp = currentdate.getHours() + ":" + currentdate.getMinutes() + ":" + currentdate.getSeconds();
  io.emit('serv_message', {timestamp, name, message });

});

socket_other_server.on('disconnect', () => {
  console.log('The other server disconnected')
})

http.listen(config.app.server_port, config.app.public_ip, function() {
  console.log('listening on port: ', config.app.server_port)
})

