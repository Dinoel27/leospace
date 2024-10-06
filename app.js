// Hamburger menu functionality
const menuIcon = document.getElementById('menu-icon');
const navLinks = document.getElementById('nav-links');

menuIcon.addEventListener('click', () => {
  navLinks.classList.toggle('show-menu');
});

// Select all elements with the class "read-more-btn"
const readMoreButtons = document.querySelectorAll('.read-more-btn');

// Loop through each button and add an event listener
readMoreButtons.forEach(button => {
    button.addEventListener('click', function() {
        const parentBlock = this.parentElement; // Get the parent section of the button
        const fullText = parentBlock.querySelector('.full-text');
        const shortText = parentBlock.querySelector('.short-text');

        // Toggle the visibility of the short and full text
        if (fullText.style.display === 'none') {
            fullText.style.display = 'block';
            shortText.style.display = 'none';
            this.textContent = 'Read Less'; // Change button text
        } else {
            fullText.style.display = 'none';
            shortText.style.display = 'block';
            this.textContent = 'Read More'; // Change button text
        }
    });
});

// Get the resume content div and download button
const resumeContent = document.querySelector('.resume-content');
const downloadButton = document.querySelector('.download-btn');

// Add an event listener to track the scroll position
resumeContent.addEventListener('scroll', function() {
    // Check if the user has scrolled to the bottom of the resume content
    if (resumeContent.scrollTop + resumeContent.clientHeight >= resumeContent.scrollHeight) {
        downloadButton.style.display = 'block'; // Show the download button
    }
});

// Set up scene, camera, and renderer
const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
const renderer = new THREE.WebGLRenderer({ canvas: document.querySelector('#three-canvas'), alpha: true , antialias: true});
renderer.outputColorSpace = THREE.SRGBColorSpace;
renderer.setSize(window.innerWidth, window.innerHeight);
camera.position.z = 5;


// Add a rotating cube (example)
// const geometry = new THREE.BoxGeometry();
// const material = new THREE.MeshBasicMaterial({ color: 0x00ff00, wireframe: true });
// const cube = new THREE.Mesh(geometry, material);
// scene.add(cube);

//LIGHTS
// const light = new THREE.PointLight(0xffffff, 1.2, 100);
// light.position.set(0, 1, -2);
// light.rotation.set(1, 0, 0)
// scene.add(light);

// const alight = new THREE.AmbientLight( 0x404040, 2.5 ); // soft white light
// scene.add( alight );


// Add lighting to the scene
const ambientLight = new THREE.AmbientLight(0xFFFBE7, 10); // Soft ambient light
scene.add(ambientLight);

// const directionalLight = new THREE.DirectionalLight(0xD9D9D9, 0.1, 200); // Strong directional light
// directionalLight.position.set(10, 80, 100); // Position the light source
// directionalLight.rotation.set(-1.5, 0, 0);
// scene.add(directionalLight);

// const directionalLight2 = new THREE.DirectionalLight(0xD9D9D9, 1, 200); // Strong directional light
// directionalLight2.position.set(-10, 100, 100); // Position the light source
// directionalLight2.rotation.set(-1, 0, 0);
// scene.add(directionalLight2);

// const directionalLight3 = new THREE.DirectionalLight(0xD9D9D9, 1, 200); // Strong directional light
// directionalLight3.position.set(0, -2.65, 100); // Position the light source
// directionalLight3.rotation.set(0, 0, 0);
// scene.add(directionalLight3);

const light = new THREE.PointLight(0xD9D9D9, 100, 4);
light.position.set( 0, 0.9, 0);
light.rotation.set(2, 0, 0);
scene.add( light );

const light2 = new THREE.PointLight(0xD9D9D9, 100, 6.5 );
light2.position.set( -2, 0.9, 0);
light2.rotation.set(2, 0, 0);
scene.add( light2 );

const light3 = new THREE.PointLight(0xD9D9D9, 100, 6.5 );
light3.position.set( 2, 0.9, 0);
light3.rotation.set(2, 0, 0);
scene.add( light3 );

const light4 = new THREE.PointLight(0xD9D9D9, 100, 6.5 );
light4.position.set( 2, -4, -2);
light4.rotation.set(2, 0, 0);
scene.add( light4 );


//trumpet light tentative 
const light5 = new THREE.PointLight(0xD9D9D9, 100, 6.5 );
light5.position.set(-2, -3.6, 0);
light5.rotation.set(2, 0, 0);
scene.add( light5 );


// Initialize GLTFLoader with DRACOLoader
const loader = new THREE.GLTFLoader();
// const dracoLoader = new THREE.DRACOLoader();
// dracoLoader.setDecoderPath('https://cdn.jsdelivr.net/npm/three@0.128.0/examples/js/libs/draco/'); 
// loader.setDRACOLoader(dracoLoader); 

// SHELF
loader.load('metall_shelf1.glb', function(gltf) {
    const model = gltf.scene;
    scene.add(model);

    // Adjust model if needed
    model.scale.set(3.8, 5, 2.1);
    model.position.set(0, -4, 0);
    model.rotation.set(-0.19, 0, 0);

}, undefined, function(error) {
    console.error('An error happened:', error);
});


//TRUMPET
loader.load('trumpet.glb', function(gltf) {
    const model = gltf.scene;
    scene.add(model);

    // Adjust model if needed
    model.scale.set(0.25, 0.25, 0.25);
    model.position.set(-1.5, -3.6, 0);
    model.rotation.set(0, -2, 0.15);

}, undefined, function(error) {
    console.error('An error happened:', error);
});

//TRUMPET
loader.load('trumpet.glb', function(gltf) {
    const model = gltf.scene;
    scene.add(model);

    // Adjust model if needed
    model.scale.set(0.25, 0.25, 0.25);
    model.position.set(-0.55, -3.6, 0);
    model.rotation.set(0, -2, 0.15);

}, undefined, function(error) {
    console.error('An error happened:', error);
});

//TRUMPET
loader.load('trumpet.glb', function(gltf) {
    const model = gltf.scene;
    scene.add(model);

    // Adjust model if needed
    model.scale.set(0.25, 0.25, 0.25);
    model.position.set(0.55, -3.6, 0);
    model.rotation.set(0, -2, 0.15);

}, undefined, function(error) {
    console.error('An error happened:', error);
});

//TRUMPET
loader.load('trumpet.glb', function(gltf) {
    const model = gltf.scene;
    scene.add(model);

    // Adjust model if needed
    model.scale.set(0.25, 0.25, 0.25);
    model.position.set(1.5, -3.6, 0);
    model.rotation.set(0, -2, 0.15);

}, undefined, function(error) {
    console.error('An error happened:', error);
});

// Animation loop
function animate() {
    requestAnimationFrame(animate);

    // Rotate the cube for some interaction
    // cube.rotation.x += 0.01;
    // cube.rotation.y += 0.01;

    renderer.render(scene, camera);
}

animate();

// Adjust canvas size when the window is resized
window.addEventListener('resize', () => {
    renderer.setSize(window.innerWidth, window.innerHeight);
    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();
});