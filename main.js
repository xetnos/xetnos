var $container = $('#sphere');
var renderer = new THREE.WebGLRenderer({ antialias: true });
var camera = new THREE.PerspectiveCamera(80, 1, 0.1, 10000);
var scene = new THREE.Scene();

scene.add(camera);
renderer.setSize(250, 250);
$container.append(renderer.domElement);

// Camera
camera.position.z = 200;

// Material
var pinkMat = new THREE.MeshPhongMaterial({
  color: new THREE.Color("#fff"),
  emissive: new THREE.Color("#2b2b2b"),
  specular: new THREE.Color("#fff"),
  shininess: 100,
  shading: THREE.FlatShading,
  transparent: 1,
  opacity: 1
});

var L1 = new THREE.PointLight(0xffffff, 1);
L1.position.z = 100;
L1.position.y = 100;
L1.position.x = 100;
scene.add(L1);

var L2 = new THREE.PointLight(0xffffff, 0.8);
L2.position.z = 200;
L2.position.y = 400;
L2.position.x = -100;
scene.add(L2);

// IcoSphere -> THREE.IcosahedronGeometry(80, 1) 1-4
var Ico = new THREE.Mesh(new THREE.IcosahedronGeometry(75, 1), pinkMat);
Ico.rotation.z = 0.5;
scene.add(Ico);

function update() {
  Ico.rotation.x += 2 / 100;
  Ico.rotation.y += 2 / 100;
}

// Render
function render() {
  requestAnimationFrame(render);
  renderer.render(scene, camera);
  update();
}

render();

// function to set renderer size based on container width
function setRendererSize() {
  var containerWidth = $container.width();
  renderer.setSize(containerWidth, containerWidth);
}

// call function on page load
$(document).ready(function() {
  setRendererSize();
});

// call function on window resize
$(window).resize(function() {
  setRendererSize();
});
