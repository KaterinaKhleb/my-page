<template>
  <v-container class="min-h-screen d-flex align-center">
    <v-row class="fill-height">
      <v-col cols="12" md="4" class="d-flex justify-start align-center pl-8">
        <ProfileCard description="A passionate Developer crafting innovative and impactful digital solutions" />
      </v-col>
      <v-col cols="12" md="8" class="d-flex align-center">
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
</template>