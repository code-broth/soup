"use strict"

const PORT = 45654

let clients = []

function remove( client ) {
  clients.splice( clients.indexOf(client), 1 )
}

require('net').createServer(function(sock) {
    clients.push(sock)
    sock.on('close', function(data) { remove( sock ) })
})
.listen(PORT)

exports.publish = function( world ){
  let json_world = JSON.stringify( world )
  for ( let client of clients ){
    client.write( json_world )
  }
}

//http://www.hacksparrow.com/tcp-socket-programming-in-node-js.html
