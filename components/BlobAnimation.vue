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

  const geometry = new THREE.SphereGeometry(3.5, 32, 32);
  const material = new THREE.MeshBasicMaterial({
    color: 0x6366f1,
    transparent: true,
    opacity: 0.2,
  });

  const blob = new THREE.Mesh(geometry, material);
  scene.add(blob);

  camera.position.set(-3, 0, 8);
  blob.position.set(-3, 0, 0);

  const originalPositions = [...geometry.attributes.position.array];

  const onMouseMove = (event) => {
    mouse.x = (event.clientX / window.innerWidth) * 2 - 1;
    mouse.y = -(event.clientY / window.innerHeight) * 2 + 1;
  };

  window.addEventListener("mousemove", onMouseMove);

  function animate() {
    requestAnimationFrame(animate);

    const time = Date.now() * 0.001;
    const positions = geometry.attributes.position.array;

    const mouseInfluence = Math.min(1, Math.max(0, 1 - Math.abs(mouse.x + 0.5)));
    const attractionX = mouse.x * 2 * mouseInfluence;
    const attractionY = mouse.y * 2 * mouseInfluence;

    for (let i = 0; i < positions.length; i += 3) {
      const x = originalPositions[i];
      const y = originalPositions[i + 1];
      const z = originalPositions[i + 2];

      const noise = Math.sin(time + x) * Math.cos(time + y) * 0.3;
      const magnetism = (x * attractionX + y * attractionY) * 0.1;

      positions[i] = x + noise + magnetism;
      positions[i + 1] = y + noise + magnetism;
      positions[i + 2] = z + noise;
    }

    geometry.attributes.position.needsUpdate = true;
    blob.rotation.x += 0.01;
    blob.rotation.y += 0.01;

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
