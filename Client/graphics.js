const THREE = require('THREE')

scene = new THREE.Scene();

camera = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 1, 10000 );
camera.position.z = 5;

geometry = new THREE.BoxGeometry( 1, 1, 1 );
material = new THREE.MeshBasicMaterial( { color: 0xff0000 } );

renderer = new THREE.WebGLRenderer();
renderer.setSize( window.innerWidth, window.innerHeight );

document.body.appendChild( renderer.domElement );

let render = function () {
  requestAnimationFrame( render )
  renderer.render(scene, camera)
}
render()

// -------------------------------------------------------------------------- //

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

    while (world.length < peasants.length) { remove_peasant() }
    while (world.length > peasants.length) { create_peasant() }

    for (let i in peasants) {
      peasants[i].position.set( ...world[i] )
    }
}
