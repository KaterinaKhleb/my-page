<template>
  <!-- <v-card class="profile-card pa-6"> -->
  <div class="text-center pa-6">
    <!-- <div class="bg-background rounded-lg pa-4 mb-4">
        <div class="text-6xl mb-2">👨‍💻</div>
      </div> -->
    <h2 class="text-h4 font-weight-bold text-text mb-2">
      Ekaterina
      <br />
      Khlebushkina
    </h2>
    <p class="text-body-1 text-grey-darken-1 mb-3">{{ description }}</p>

    <!-- Contact Info Sections -->
    <div class="contact-sections dark-color mb-2">
      <!-- Work Section -->
      <div class="contact-item mb-6 pl-8">
        <div class="d-flex align-center mb-2">
          <v-icon class="contact-icon mr-3">mdi-code-tags</v-icon>
          <div>
            <div class="contact-label">WORK</div>
            <div class="contact-value">{{ currentWork }}</div>
          </div>
        </div>
      </div>

      <!-- Email Section -->
      <div class="contact-item mb-2 pl-8">
        <div class="d-flex align-center mb-2">
          <v-icon class="contact-icon mr-3">mdi-email</v-icon>
          <div>
            <div class="contact-label">EMAIL</div>
            <div class="contact-value">{{ email }}</div>
          </div>
        </div>
      </div>
    </div>

    <!-- Social Media Links -->
    <div class="d-flex justify-center gap-2">
      <v-btn
        v-for="social in socialLinks"
        :key="social.name"
        :href="social.url"
        target="_blank"
        icon
        size="small"
        variant="text">
        {{ social.icon }}
      </v-btn>
    </div>
  </div>
  <!-- </v-card> -->
</template>

<script setup>
defineProps({
  name: {
    type: String,
    default: "Ekaterina Khlebushkina",
  },
  description: {
    type: String,
    default: "AWS Solutions Architect | Full Stack Developer ",
  },
  email: {
    type: String,
    default: "ekaterina.khlebushkina@gmail.com",
  },
  currentWork: {
    type: String,
    default: "Software Engineer at Bosch Engineering GmbH",
  },
  location: {
    type: String,
    default: "Abstatt, Germany",
  },
  cvUrl: {
    type: String,
    default: "/cv.pdf",
  },
  socialLinks: {
    type: Array,
    default: () => [
      { name: "LinkedIn", icon: "💼", url: "https://linkedin.com/in/yourprofile" },
      { name: "GitHub", icon: "🐙", url: "https://github.com/yourusername" },
      { name: "Twitter", icon: "🐦", url: "https://twitter.com/yourusername" },
    ],
  },
});
</script>

<style scoped>
.contact-sections {
  text-align: left;
}

.contact-item {
  border-bottom: 1px solid rgba(0, 0, 0, 0.1);
  padding-bottom: 1rem;
}

.contact-item:last-child {
  border-bottom: none;
  padding-bottom: 0;
}

.contact-icon {
  font-size: 24px;
  opacity: 0.7;
}

.contact-label {
  font-size: 0.75rem;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 0.5px;
  opacity: 0.7;
  margin-bottom: 2px;
}

.contact-value {
  font-size: 0.9rem;
  font-weight: 500;
}

.profile-card {
  background: transparent;
  width: 79%;
  margin: auto;
  max-width: 340px;
  min-width: 300px;
  border: 0px;
}
</style>
