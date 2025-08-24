<template>
  <div class="page-container">
    <BlobAnimation />
    <div class="profile-card-sticky">
      <ProfileCard />
    </div>
    <v-container class="content-container">
      <v-row>
        <v-col cols="12" offset-md="4" md="8" class="d-flex align-center">
          <div class="w-100">
            <h1 class="text-h2 font-weight-bold mb-4 accent-color">
              CERTIFICATIONS &
              <br />
              <span class="text-grey-darken-2">ACHIEVEMENTS</span>
            </h1>

            <v-row class="mt-8">
              <v-col cols="12" md="6" class="mb-4">
                <v-card class="bg-text pa-6 h-100">
                  <div class="d-flex align-center mb-3">
                    <v-icon class="dark-color mr-3" size="large">mdi-aws</v-icon>
                    <div>
                      <h3 class="text-h6 font-weight-bold accent-color">AWS Certified Solutions Architect</h3>
                      <p class="accent-color">Associate</p>
                    </div>
                  </div>
                  <p class="accent-color mb-3">Issued: September 2023</p>
                  <v-btn
                    href="https://www.credly.com/badges/ad71b68c-84c5-4d12-97ab-e76452c57bce/public_url"
                    variant="outlined"
                    color="accent"
                    size="small">
                    <v-icon start>mdi-certificate</v-icon>
                    View Certificate
                  </v-btn>
                </v-card>
              </v-col>

              <v-col cols="12" md="6" class="mb-4">
                <v-card class="bg-text pa-6 h-100">
                  <div class="d-flex align-center mb-3">
                    <v-icon size="large" class="dark-color mr-3">mdi-aws</v-icon>
                    <div>
                      <h3 class="text-h6 font-weight-bold accent-color">AWS Certified Developer</h3>
                      <p class="accent-color">Associate</p>
                    </div>
                  </div>
                  <p class="accent-color mb-3">Issued: December 2023</p>
                  <v-btn
                    href="https://www.credly.com/badges/4d7c9a6e-0916-496c-bbfe-8e98fe72d82b/public_url"
                    variant="outlined"
                    color="accent"
                    size="small">
                    <v-icon start>mdi-certificate</v-icon>
                    View Certificate
                  </v-btn>
                </v-card>
              </v-col>

              <v-col cols="12" md="6" class="mb-4">
                <v-card class="bg-text pa-6 h-100">
                  <div class="d-flex align-center mb-3">
                    <v-icon size="large" class="mr-3 dark-color">mdi-google</v-icon>
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
                    <v-icon size="large" class="mr-3 dark-color">mdi-docker</v-icon>
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
                    <v-icon size="large" class="dark-color mr-3">mdi-react</v-icon>
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
                    <v-icon size="large" class="dark-color mr-3">mdi-nodejs</v-icon>
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
</style>
