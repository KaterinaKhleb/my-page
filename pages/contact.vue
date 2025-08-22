<template>
  <div class="page-container">
    <div class="profile-card-sticky">
      <ProfileCard description="A passionate Developer crafting innovative and impactful digital solutions" />
    </div>
    <v-container class="content-container">
      <v-row>
        <v-col cols="12" offset-md="4" md="8" class="d-flex align-center">
        <div class="w-100">
          <h1 class="text-h2 font-weight-bold text-accent mb-4">
            LET'S WORK
            <br>
            <span class="text-grey-darken-2">TOGETHER</span>
          </h1>
          <p class="text-h6 mb-8 accent-color">
            Collaboration on meaningful projects excites me. Feel free to reach out with your 
            ideas, and let's work together to turn them into something truly exceptional.
          </p>

          <v-form class="mt-8">
            <v-row>
              <v-col cols="12" md="6">
                <label class="text-body-1 mb-2 d-block accent-color">Your Name</label>
                <v-text-field
                  variant="outlined"
                  placeholder="John Doe"
                  bg-color="text"
                  class="mb-4"
                  hide-details
                ></v-text-field>
              </v-col>
              <v-col cols="12" md="6">
                <label class="text-body-1 mb-2 d-block accent-color">Email Address</label>
                <v-text-field
                  variant="outlined"
                  placeholder="you@example.com"
                  bg-color="text"
                  class="mb-4"
                  hide-details
                ></v-text-field>
              </v-col>
              <v-col cols="12">
                <label class="text-body-1 mb-2 d-block accent-color">Message</label>
                <v-textarea
                  variant="outlined"
                  placeholder="Write your message here..."
                  bg-color="text"
                  rows="6"
                  class="mb-4"
                  hide-details
                ></v-textarea>
              </v-col>
              <v-col cols="12">
                <v-btn color="accent" size="large" class="text-white">
                  Send Message
                  <v-icon end>mdi-send</v-icon>
                </v-btn>
              </v-col>
            </v-row>
          </v-form>
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