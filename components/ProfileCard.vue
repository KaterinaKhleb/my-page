<template>
  <v-card class="bg-white rounded-lg pa-6 tilt-card" style="width: 33.333vw; max-width: 400px; min-width: 300px;">
    <div class="text-center">
      <div class="bg-background rounded-lg pa-4 mb-4">
        <div class="text-6xl mb-2">👨‍💻</div>
      </div>
      <h2 class="text-h4 font-weight-bold text-text mb-2">Your Name</h2>
      <p class="text-body-1 text-grey-darken-1">{{ description }}</p>
    </div>
  </v-card>
</template>

<script setup>
defineProps({
  description: {
    type: String,
    default: 'A passionate Full-Stack Developer & Cloud Architect crafting innovative solutions'
  }
})
</script>

<style scoped>
.tilt-card {
  transition: transform 0.3s ease;
}

.tilt-card:hover {
  transform: rotate(-5deg) scale(1.05);
}
</style>