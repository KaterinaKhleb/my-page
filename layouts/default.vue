<template>
  <v-app class="bg-background">
    <v-app-bar flat height="80" style="background-color: #22264c;">
      <v-container class="d-flex justify-center">
        <v-btn-toggle style="background-color: #22264c;">
          <v-btn to="/" icon="mdi-home" variant="text" class="text-white" style="background-color: #22264c;"></v-btn>
          <v-btn to="/work" icon="mdi-briefcase" variant="text" class="text-white" style="background-color: #22264c;"></v-btn>
          <v-btn to="/projects" icon="mdi-folder" variant="text" class="text-white" style="background-color: #22264c;"></v-btn>
          <v-btn to="/certs" icon="mdi-certificate" variant="text" class="text-white" style="background-color: #22264c;"></v-btn>
          <v-btn to="/contact" icon="mdi-message" variant="text" class="text-white" style="background-color: #22264c;"></v-btn>
        </v-btn-toggle>
      </v-container>
    </v-app-bar>
    <v-main>
      <slot />
    </v-main>
  </v-app>
</template>