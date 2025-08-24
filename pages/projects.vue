<template>
  <div class="page-container">
    <div class="profile-card-sticky">
      <ProfileCard />
    </div>
    <v-container class="content-container">
      <v-row>
        <v-col cols="12" offset-md="4" md="8" class="d-flex align-center">
          <div class="w-100">
            <h1 class="text-h2 font-weight-bold mb-4 accent-color">
              RECENT
              <br />
              <span class="text-grey-darken-2">PROJECTS</span>
            </h1>

            <v-row class="mt-8">
              <v-col cols="12" md="6" class="mb-6">
                <v-card class="bg-text pa-6 h-100">
                  <h3 class="text-h5 font-weight-bold mb-3 accent-color">E-Commerce Platform</h3>
                  <p class="mb-4 accent-color">
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
                  <h3 class="text-h5 font-weight-bold mb-3 accent-color">Cloud Infrastructure</h3>
                  <p class="mb-4 accent-color">Automated deployment pipeline using Terraform and Docker containers.</p>
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
                  <h3 class="text-h5 font-weight-bold mb-3 accent-color">Mobile App</h3>
                  <p class="mb-4 accent-color">
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
                  <h3 class="text-h5 font-weight-bold mb-3 accent-color">Data Analytics Dashboard</h3>
                  <p class="mb-4 accent-color">Real-time analytics platform with Python backend and Vue.js frontend.</p>
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
  </div>
</template>

<style scoped>
.page-container {
  position: relative;
  min-height: 100vh;
}

.content-container {
  min-height: 100vh;
  padding-top: 2rem;
  padding-bottom: 2rem;
}

.bg-text {
  background-color: transparent !important;
  border: 2px solid #f7a027 !important;
  transition: transform 0.3s ease;
}

.bg-text:hover {
  transform: rotate(-2deg) scale(1.02);
}

.v-btn {
  background-color: transparent !important;
  border-color: #22264c !important;
  color: #22264c !important;
}
</style>
