<template>
  <div class="page-container">
    <BlobAnimation />
    <div class="profile-card-sticky">
      <ProfileCard />
    </div>
    <v-container class="content-container">
      <v-row>
        <v-col cols="12" offset-md="4" md="8" class="d-flex align-center">
          <div>
            <h1 class="text-h2 font-weight-bold mb-4 accent-color">
              SOFTWARE
              <br />
              <span class="text-grey-darken-2">ENGINEER</span>
            </h1>
            <p class="text-h6 mb-6 accent-color">
              I'm a passionate developer with expertise across web development, deployment, backend architecture and
              devops. I help people bring their bring projects in the cloud and make them highly accesible.
            </p>
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
  position: relative;
  z-index: 100;
}

.content-container {
  min-height: 100vh;
  padding-top: 2rem;
  padding-bottom: 2rem;
  position: relative;
  z-index: 100;
}
</style>
