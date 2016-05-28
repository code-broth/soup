const THREE = require('THREE')

let scene = new THREE.Scene()
let camera = new THREE.PerspectiveCamera( 75, window.innerWidth/window.innerHeight, 0.1, 1000 )

let renderer = new THREE.WebGLRenderer()
renderer.setSize( window.innerWidth, window.innerHeight )
document.body.appendChild( renderer.domElement )

let geometry = new THREE.BoxGeometry( 1, 1, 1 )
let material = new THREE.MeshBasicMaterial( { color: 0x00ff00 } )

let render = function () {
  requestAnimationFrame( render )
  renderer.render(scene, camera)
}
render()

let peasants = []

function create_peasant(){
  let p = new THREE.Mesh( geometry, material )
  scene.add( p )
  peasants.push( p )
}

function remove_peasant(){
  scene.remove( peasants.pop() )
}

exports.render_world = function( world ){
    // world will be a list of peasants
    // world will be of the form [ [x,y,z], [x,y,z], ... ]
}
