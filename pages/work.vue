<template>
  <v-container class="min-h-screen d-flex align-center">
    <v-row class="fill-height">
      <v-col cols="12" md="4" class="d-flex justify-start align-center pl-8">
        <ProfileCard />
      </v-col>
      <v-col cols="12" md="8" class="d-flex align-center">
        <div class="w-100">
          <h1 class="text-h2 font-weight-bold mb-4" style="color: #f7a027;">
            FULL STACK
            <br>
            <span class="text-grey-darken-2">DEVELOPER</span>
          </h1>
          <p class="text-h6 mb-8" style="color: #f7a027;">
            I'm a passionate developer with expertise across web development, app development, and 
            backend systems. Always exploring new technologies and solving real-world problems 
            through code.
          </p>

          <div class="mb-8">
            <h2 class="text-h4 font-weight-bold mb-6" style="color: #f7a027;">Education</h2>
            <div class="position-relative">
              <div class="timeline-line"></div>
              
              <div class="timeline-item mb-6">
                <div class="timeline-dot bg-accent"></div>
                <div class="ml-8">
                  <h3 class="text-h6 font-weight-bold" style="color: #f7a027;">B.Tech Computer Science</h3>
                  <p class="mb-2" style="color: #f7a027;">University Name, Location</p>
                  <p style="color: #f7a027;">2018 - 2022</p>
                </div>
              </div>

              <div class="timeline-item mb-6">
                <div class="timeline-dot bg-grey"></div>
                <div class="ml-8">
                  <h3 class="text-h6 font-weight-bold" style="color: #f7a027;">Higher Secondary</h3>
                  <p class="mb-2" style="color: #f7a027;">School Name, Location</p>
                  <p style="color: #f7a027;">2016 - 2018</p>
                </div>
              </div>
            </div>
          </div>

          <div>
            <h2 class="text-h4 font-weight-bold mb-6" style="color: #f7a027;">Experience</h2>
            <div class="position-relative">
              <div class="timeline-line"></div>
              
              <div class="timeline-item mb-6">
                <div class="timeline-dot bg-accent"></div>
                <div class="ml-8">
                  <h3 class="text-h6 font-weight-bold" style="color: #f7a027;">Senior Full Stack Developer</h3>
                  <p class="mb-2" style="color: #f7a027;">Company Name</p>
                  <p class="mb-2" style="color: #f7a027;">2023 - Present</p>
                  <p style="color: #f7a027;">Leading development of scalable web applications and cloud infrastructure.</p>
                </div>
              </div>

              <div class="timeline-item">
                <div class="timeline-dot bg-grey"></div>
                <div class="ml-8">
                  <h3 class="text-h6 font-weight-bold" style="color: #f7a027;">Cloud Architect</h3>
                  <p class="mb-2" style="color: #f7a027;">Previous Company</p>
                  <p class="mb-2" style="color: #f7a027;">2022 - 2023</p>
                  <p style="color: #f7a027;">Designed and implemented cloud solutions using AWS services.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </v-col>
    </v-row>
  </v-container>
</template>

<style scoped>
.timeline-line {
  position: absolute;
  left: 12px;
  top: 0;
  bottom: 0;
  width: 2px;
  background-color: #666;
}

.timeline-item {
  position: relative;
}

.timeline-dot {
  position: absolute;
  left: 0;
  top: 8px;
  width: 24px;
  height: 24px;
  border-radius: 50%;
  border: 3px solid #242424;
}
</style>