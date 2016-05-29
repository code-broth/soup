"use strict"

const {publish} = require('./net')

var world = []

for (let i = 0; i < 200; i++) {
  world.push( [ 0, 0, 0 ] )
}

let tinytime = 0

function update(){

  tinytime += 0.05

  for ( let i in world ) {
    let t = tinytime
    let x = i / world.length * 4
    world[i] = [
      10*Math.cos(t*1.1+x),
      10*Math.cos(t*0.9+x),
      10*Math.sin(t*1.0+x)-20
    ]
  }

  publish( world )

}

setInterval( update, 50 )
