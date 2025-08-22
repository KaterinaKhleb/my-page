<template>
  <v-container class="min-h-screen d-flex align-center">
    <v-row class="fill-height">
      <v-col cols="12" md="4" class="d-flex justify-start align-center pl-8">
        <ProfileCard />
      </v-col>
      <v-col cols="12" md="8" class="d-flex align-center">
        <div class="w-100">
          <h1 class="text-h2 font-weight-bold mb-4" style="color: #f7a027;">
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
                    <h3 class="text-h6 font-weight-bold" style="color: #f7a027;">AWS Solutions Architect</h3>
                    <p style="color: #f7a027;">Professional Level</p>
                  </div>
                </div>
                <p style="color: #f7a027;" class="mb-3">Issued: 2023</p>
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
                    <h3 class="text-h6 font-weight-bold" style="color: #f7a027;">Kubernetes Administrator</h3>
                    <p style="color: #f7a027;">CKA Certified</p>
                  </div>
                </div>
                <p style="color: #f7a027;" class="mb-3">Issued: 2023</p>
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
                    <h3 class="text-h6 font-weight-bold" style="color: #f7a027;">Google Cloud Professional</h3>
                    <p style="color: #f7a027;">Cloud Architect</p>
                  </div>
                </div>
                <p style="color: #f7a027;" class="mb-3">Issued: 2022</p>
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
                    <h3 class="text-h6 font-weight-bold" style="color: #f7a027;">Docker Certified Associate</h3>
                    <p style="color: #f7a027;">Container Technology</p>
                  </div>
                </div>
                <p style="color: #f7a027;" class="mb-3">Issued: 2022</p>
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
                    <h3 class="text-h6 font-weight-bold" style="color: #f7a027;">React Developer</h3>
                    <p style="color: #f7a027;">Meta Certified</p>
                  </div>
                </div>
                <p style="color: #f7a027;" class="mb-3">Issued: 2021</p>
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
                    <h3 class="text-h6 font-weight-bold" style="color: #f7a027;">Node.js Developer</h3>
                    <p style="color: #f7a027;">OpenJS Foundation</p>
                  </div>
                </div>
                <p style="color: #f7a027;" class="mb-3">Issued: 2021</p>
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

<style scoped>
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