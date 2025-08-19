<template>
  <v-container class="min-h-screen d-flex align-center">
    <v-row class="fill-height">
      <v-col cols="12" md="5" class="d-flex justify-center align-center">
        <ProfileCard />
      </v-col>
      <v-col cols="12" md="7" class="d-flex align-center">
        <div class="w-100">
          <h1 class="text-h2 font-weight-bold text-white mb-4">
            RECENT
            <br>
            <span class="text-grey-darken-2">PROJECTS</span>
          </h1>

          <v-row class="mt-8">
            <v-col cols="12" md="6" class="mb-6">
              <v-card class="bg-text pa-6 h-100">
                <h3 class="text-h5 font-weight-bold text-white mb-3">E-Commerce Platform</h3>
                <p class="text-grey-lighten-1 mb-4">
                  A full-stack e-commerce solution with React, Node.js, and AWS deployment.
                </p>
                <div class="mb-4">
                  <v-chip class="mr-2 mb-2" color="accent" size="small">React</v-chip>
                  <v-chip class="mr-2 mb-2" color="accent" size="small">Node.js</v-chip>
                  <v-chip class="mr-2 mb-2" color="accent" size="small">AWS</v-chip>
                </div>
                <div class="d-flex justify-space-between">
                  <v-btn variant="text" color="accent" size="small">
                    <v-icon start>mdi-open-in-new</v-icon>
                    Live Demo
                  </v-btn>
                  <v-btn variant="text" color="white" size="small">
                    <v-icon start>mdi-github</v-icon>
                    GitHub
                  </v-btn>
                </div>
              </v-card>
            </v-col>

            <v-col cols="12" md="6" class="mb-6">
              <v-card class="bg-text pa-6 h-100">
                <h3 class="text-h5 font-weight-bold text-white mb-3">Cloud Infrastructure</h3>
                <p class="text-grey-lighten-1 mb-4">
                  Automated deployment pipeline using Terraform and Docker containers.
                </p>
                <div class="mb-4">
                  <v-chip class="mr-2 mb-2" color="accent" size="small">Terraform</v-chip>
                  <v-chip class="mr-2 mb-2" color="accent" size="small">Docker</v-chip>
                  <v-chip class="mr-2 mb-2" color="accent" size="small">Kubernetes</v-chip>
                </div>
                <div class="d-flex justify-space-between">
                  <v-btn variant="text" color="accent" size="small">
                    <v-icon start>mdi-open-in-new</v-icon>
                    Live Demo
                  </v-btn>
                  <v-btn variant="text" color="white" size="small">
                    <v-icon start>mdi-github</v-icon>
                    GitHub
                  </v-btn>
                </div>
              </v-card>
            </v-col>

            <v-col cols="12" md="6" class="mb-6">
              <v-card class="bg-text pa-6 h-100">
                <h3 class="text-h5 font-weight-bold text-white mb-3">Mobile App</h3>
                <p class="text-grey-lighten-1 mb-4">
                  Cross-platform mobile application built with React Native and Firebase.
                </p>
                <div class="mb-4">
                  <v-chip class="mr-2 mb-2" color="accent" size="small">React Native</v-chip>
                  <v-chip class="mr-2 mb-2" color="accent" size="small">Firebase</v-chip>
                  <v-chip class="mr-2 mb-2" color="accent" size="small">TypeScript</v-chip>
                </div>
                <div class="d-flex justify-space-between">
                  <v-btn variant="text" color="accent" size="small">
                    <v-icon start>mdi-open-in-new</v-icon>
                    Live Demo
                  </v-btn>
                  <v-btn variant="text" color="white" size="small">
                    <v-icon start>mdi-github</v-icon>
                    GitHub
                  </v-btn>
                </div>
              </v-card>
            </v-col>

            <v-col cols="12" md="6" class="mb-6">
              <v-card class="bg-text pa-6 h-100">
                <h3 class="text-h5 font-weight-bold text-white mb-3">Data Analytics Dashboard</h3>
                <p class="text-grey-lighten-1 mb-4">
                  Real-time analytics platform with Python backend and Vue.js frontend.
                </p>
                <div class="mb-4">
                  <v-chip class="mr-2 mb-2" color="accent" size="small">Python</v-chip>
                  <v-chip class="mr-2 mb-2" color="accent" size="small">Vue.js</v-chip>
                  <v-chip class="mr-2 mb-2" color="accent" size="small">PostgreSQL</v-chip>
                </div>
                <div class="d-flex justify-space-between">
                  <v-btn variant="text" color="accent" size="small">
                    <v-icon start>mdi-open-in-new</v-icon>
                    Live Demo
                  </v-btn>
                  <v-btn variant="text" color="white" size="small">
                    <v-icon start>mdi-github</v-icon>
                    GitHub
                  </v-btn>
                </div>
              </v-card>
            </v-col>
          </v-row>
        </div>
      </v-col>
    </v-row>
  </v-container>
</template>