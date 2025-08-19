<template>
  <v-container class="min-h-screen d-flex align-center">
    <v-row class="fill-height">
      <v-col cols="12" md="5" class="d-flex justify-center align-center">
        <ProfileCard />
      </v-col>
      <v-col cols="12" md="7" class="d-flex align-center">
        <div class="w-100">
          <h1 class="text-h2 font-weight-bold text-white mb-4">
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
                    <h3 class="text-h6 font-weight-bold text-white">AWS Solutions Architect</h3>
                    <p class="text-grey-lighten-1">Professional Level</p>
                  </div>
                </div>
                <p class="text-grey-lighten-2 mb-3">Issued: 2023</p>
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
                    <h3 class="text-h6 font-weight-bold text-white">Kubernetes Administrator</h3>
                    <p class="text-grey-lighten-1">CKA Certified</p>
                  </div>
                </div>
                <p class="text-grey-lighten-2 mb-3">Issued: 2023</p>
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
                    <h3 class="text-h6 font-weight-bold text-white">Google Cloud Professional</h3>
                    <p class="text-grey-lighten-1">Cloud Architect</p>
                  </div>
                </div>
                <p class="text-grey-lighten-2 mb-3">Issued: 2022</p>
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
                    <h3 class="text-h6 font-weight-bold text-white">Docker Certified Associate</h3>
                    <p class="text-grey-lighten-1">Container Technology</p>
                  </div>
                </div>
                <p class="text-grey-lighten-2 mb-3">Issued: 2022</p>
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
                    <h3 class="text-h6 font-weight-bold text-white">React Developer</h3>
                    <p class="text-grey-lighten-1">Meta Certified</p>
                  </div>
                </div>
                <p class="text-grey-lighten-2 mb-3">Issued: 2021</p>
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
                    <h3 class="text-h6 font-weight-bold text-white">Node.js Developer</h3>
                    <p class="text-grey-lighten-1">OpenJS Foundation</p>
                  </div>
                </div>
                <p class="text-grey-lighten-2 mb-3">Issued: 2021</p>
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
</template>