<template>
  <div>
    <canvas ref="canvas" class="blob-canvas"></canvas>
  </div>
</template>

<script setup>
const canvas = ref(null);
const mouse = { x: 0, y: 0 };

onMounted(async () => {
  const THREE = await import("three");

  const scene = new THREE.Scene();
  const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
  const renderer = new THREE.WebGLRenderer({ canvas: canvas.value, alpha: true });

  renderer.setSize(window.innerWidth, window.innerHeight);
  renderer.setClearColor(0x000000, 0);

  camera.position.set(-3, 0, 8);

  const points = [];
  const pointCount = 800;

  for (let i = 0; i < pointCount; i++) {
    const u = Math.random();
    const v = Math.random();
    const theta = 2 * Math.PI * u;
    const phi = Math.acos(2 * v - 1);
    const dist = 1.25;

    const geometry = new THREE.BufferGeometry();
    const position = new Float32Array(3);
    position[0] = dist * Math.sin(phi) * Math.cos(theta);
    position[1] = dist * Math.sin(phi) * Math.sin(theta);
    position[2] = dist * Math.cos(phi);
    geometry.setAttribute('position', new THREE.BufferAttribute(position, 3));

    const material = new THREE.PointsMaterial({ 
      size: 0.05, 
      color: 0x6366f1,
      transparent: true,
      opacity: 0.8
    });

    const point = new THREE.Points(geometry, material);
    point.userData = { u, v, originalDist: dist };
    scene.add(point);
    points.push(point);
  }

  const onMouseMove = (event) => {
    mouse.x = (event.clientX / window.innerWidth) * 2 - 1;
    mouse.y = -(event.clientY / window.innerHeight) * 2 + 1;
  };

  window.addEventListener('mousemove', onMouseMove);

  function animate() {
    requestAnimationFrame(animate);

    const time = Date.now() * 0.001;
    const mouseInfluence = Math.min(1, Math.max(0, 1 - Math.abs(mouse.x + 0.5)));

    points.forEach(point => {
      const { u, v, originalDist } = point.userData;
      const theta = 2 * Math.PI * u;
      const phi = Math.acos(2 * v - 1);
      
      const noise = Math.sin(time + point.position.x * 0.5) * Math.cos(time + point.position.y * 0.5) * 0.3;
      const dist = originalDist + noise;
      
      const magnetism = (mouse.x * point.position.x + mouse.y * point.position.y) * mouseInfluence * 0.2;
      
      point.position.x = (dist + magnetism) * Math.sin(phi) * Math.cos(theta) - 3;
      point.position.y = (dist + magnetism) * Math.sin(phi) * Math.sin(theta);
      point.position.z = (dist + magnetism) * Math.cos(phi);
    });

    renderer.render(scene, camera);
  }

  animate();
});
</script>

<style scoped>
.blob-canvas {
  position: fixed;
  top: 3vw;
  left: -32vw;
  width: 50vw;
  height: 100vh;
  z-index: 1;
  pointer-events: none;
}
</style>