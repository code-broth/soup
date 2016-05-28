"use strict"

const {publish} = require('./net')

var world = []

for (let i = 0; i < 40; i++) {
  world.push( [ 0, 0, 0 ] )
}

let tinytime = 0

function update(){

  for ( let i in world ) {
	  tinytime += 0.0002
    world[i] = [ tinytime, 10*Math.cos(tinytime), 10*Math.sin(tinytime) ]
  }

  publish( world )

}

setInterval( update, 1000 )
