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
            CERTIFICATIONS &
            <br>
            <span class="text-grey-darken-2">ACHIEVEMENTS</span>
          </h1>

          <v-row class="mt-8">
            <v-col cols="12" md="6" class="mb-4">
              <v-card class="bg-text pa-6 h-100">
                <div class="d-flex align-center mb-3">
                  <v-icon color="accent" size="large" class="mr-3">mdi-aws</v-icon>
                  <div>
                    <h3 class="text-h6 font-weight-bold accent-color">AWS Solutions Architect</h3>
                    <p class="accent-color">Professional Level</p>
                  </div>
                </div>
                <p class="accent-color mb-3">Issued: 2023</p>
                <v-btn variant="outlined" color="accent" size="small">
                  <v-icon start>mdi-certificate</v-icon>
                  View Certificate
                </v-btn>
              </v-card>
            </v-col>

            <v-col cols="12" md="6" class="mb-4">
              <v-card class="bg-text pa-6 h-100">
                <div class="d-flex align-center mb-3">
                  <v-icon color="accent" size="large" class="mr-3">mdi-kubernetes</v-icon>
                  <div>
                    <h3 class="text-h6 font-weight-bold accent-color">Kubernetes Administrator</h3>
                    <p class="accent-color">CKA Certified</p>
                  </div>
                </div>
                <p class="accent-color mb-3">Issued: 2023</p>
                <v-btn variant="outlined" color="accent" size="small">
                  <v-icon start>mdi-certificate</v-icon>
                  View Certificate
                </v-btn>
              </v-card>
            </v-col>

            <v-col cols="12" md="6" class="mb-4">
              <v-card class="bg-text pa-6 h-100">
                <div class="d-flex align-center mb-3">
                  <v-icon color="accent" size="large" class="mr-3">mdi-google</v-icon>
                  <div>
                    <h3 class="text-h6 font-weight-bold accent-color">Google Cloud Professional</h3>
                    <p class="accent-color">Cloud Architect</p>
                  </div>
                </div>
                <p class="accent-color mb-3">Issued: 2022</p>
                <v-btn variant="outlined" color="accent" size="small">
                  <v-icon start>mdi-certificate</v-icon>
                  View Certificate
                </v-btn>
              </v-card>
            </v-col>

            <v-col cols="12" md="6" class="mb-4">
              <v-card class="bg-text pa-6 h-100">
                <div class="d-flex align-center mb-3">
                  <v-icon color="accent" size="large" class="mr-3">mdi-docker</v-icon>
                  <div>
                    <h3 class="text-h6 font-weight-bold accent-color">Docker Certified Associate</h3>
                    <p class="accent-color">Container Technology</p>
                  </div>
                </div>
                <p class="accent-color mb-3">Issued: 2022</p>
                <v-btn variant="outlined" color="accent" size="small">
                  <v-icon start>mdi-certificate</v-icon>
                  View Certificate
                </v-btn>
              </v-card>
            </v-col>

            <v-col cols="12" md="6" class="mb-4">
              <v-card class="bg-text pa-6 h-100">
                <div class="d-flex align-center mb-3">
                  <v-icon color="accent" size="large" class="mr-3">mdi-react</v-icon>
                  <div>
                    <h3 class="text-h6 font-weight-bold accent-color">React Developer</h3>
                    <p class="accent-color">Meta Certified</p>
                  </div>
                </div>
                <p class="accent-color mb-3">Issued: 2021</p>
                <v-btn variant="outlined" color="accent" size="small">
                  <v-icon start>mdi-certificate</v-icon>
                  View Certificate
                </v-btn>
              </v-card>
            </v-col>

            <v-col cols="12" md="6" class="mb-4">
              <v-card class="bg-text pa-6 h-100">
                <div class="d-flex align-center mb-3">
                  <v-icon color="accent" size="large" class="mr-3">mdi-nodejs</v-icon>
                  <div>
                    <h3 class="text-h6 font-weight-bold accent-color">Node.js Developer</h3>
                    <p class="accent-color">OpenJS Foundation</p>
                  </div>
                </div>
                <p class="accent-color mb-3">Issued: 2021</p>
                <v-btn variant="outlined" color="accent" size="small">
                  <v-icon start>mdi-certificate</v-icon>
                  View Certificate
                </v-btn>
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

.profile-card-sticky {
  position: fixed !important;
  left: 2rem !important;
  top: 50vh !important;
  transform: translateY(-50%) !important;
  z-index: 1000 !important;
  width: 33.333vw;
  max-width: 400px;
  min-width: 300px;
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
  transform: rotate(3deg) scale(1.02);
}

.v-btn {
  background-color: transparent !important;
  border-color: #22264c !important;
  color: #22264c !important;
}

@media (max-width: 960px) {
  .profile-card-sticky {
    position: relative;
    left: auto;
    top: auto;
    transform: none;
    width: 100%;
    max-width: none;
    margin-bottom: 2rem;
  }
}
</style>