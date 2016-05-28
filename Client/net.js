
const net = require('net')

const HOST = '127.0.0.1'
const PORT = 45654

exports.connect = function( ondata ){

  let client = new net.Socket()

  client.connect(PORT, HOST, function() {})

  client.on('data', text => ondata( JSON.parse( text ) ))

}

//http://www.hacksparrow.com/tcp-socket-programming-in-node-js.html
