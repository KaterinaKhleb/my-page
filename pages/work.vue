<template>
  <div class="page-container">
    <BlobAnimation />
    <div class="profile-card-sticky">
      <ProfileCard />
    </div>
    <v-container class="content-container">
      <v-row>
        <v-col cols="12" offset-md="4" md="8" class="align-center">
          <div class="w-100">
            <h1 class="text-h2 font-weight-bold mb-4 accent-color">
              Professional
              <br />
              <span class="text-grey-darken-2">Experience</span>
            </h1>

            <div>
              <div
                class="mb-4 pa-4"
                style="background-color: rgba(247, 160, 39, 0.1); border-left: 4px solid #f7a027; border-radius: 4px">
                <h3 class="text-h5 font-weight-bold mb-2 accent-color">Software Engineer - Bosch Engineering GmbH</h3>
                <p class="mb-4">2019 - Present</p>
              </div>

              <h3 class="text-h6 font-weight-bold mb-4 accent-color">Key Responsibilities & Tasks Timeline</h3>
              <div class="position-relative">
                <div class="timeline-line"></div>

                <div class="timeline-item mb-6">
                  <div class="timeline-dot bg-accent"></div>
                  <div class="ml-8">
                    <h4 class="text-subtitle-1 font-weight-bold accent-color">AWS Solutions Architect</h4>
                    <p class="mb-1 accent-color">2023 - current</p>
                    <li>Designed and architected scalable cloud-based solutions and microservices.</li>
                    <li>Creating Infrastructure for placing a SaaS on AWS Marketplace</li>
                    <li>Devops, Networking in a multi-regional multi-account architecture</li>
                    <li>Building serverless applications</li>
                  </div>
                </div>

                <div class="timeline-item mb-6">
                  <div class="timeline-dot bg-accent"></div>
                  <div class="ml-8">
                    <h4 class="text-subtitle-1 font-weight-bold accent-color">Full-Stack Development</h4>
                    <p class="mb-1 accent-color">2021 - 2023</p>
                    <li>Full-Stack development with NodeJS, VueJS, Svelte</li>
                    <li>Serverless Applications</li>
                    <li>Orchestration of microservice with Docker and Kubernetes</li>
                    <li>CI/CD Integration with Github Workflows</li>
                  </div>
                </div>

                <div class="timeline-item mb-6">
                  <div class="timeline-dot bg-accent"></div>
                  <div class="ml-8">
                    <h4 class="text-subtitle-1 font-weight-bold accent-color">
                      Full-stack development, main focus on Front-end
                    </h4>
                    <p class="mb-1 accent-color">2019 - 2021</p>
                    <li>Full-stack development, main focus on Front-end (VueJS, Svelte)</li>
                    <li>CSS-based animation</li>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <hr class="accent-separator my-8" />
          <div>
            <h1 class="text-h2 font-weight-bold mb-4 accent-color">
              Education
              <br />
            </h1>
            <div
              class="mb-4 pa-4"
              style="background-color: rgba(247, 160, 39, 0.1); border-left: 4px solid #f7a027; border-radius: 4px">
              <h3 class="text-h5 font-weight-bold mb-2 accent-color">
                Bachelor of Engineering - Information Technolgy
              </h3>
              <p class="mb-4 accent-color">2015-2019 | Mikkeli University of Applied Sciences, Finland</p>
            </div>

            <h3 class="text-h6 font-weight-bold mb-4 accent-color">Main study focus</h3>
            <div class="position-relative">
              <div class="timeline-line"></div>

              <div class="timeline-item mb-6">
                <div class="timeline-dot bg-accent"></div>
                <div class="ml-8">
                  <h4 class="text-subtitle-1 font-weight-bold accent-color">Network Security</h4>
                  <li>Windows Servers, Linux Servers</li>
                  <li>Server Backup technologies</li>
                  <li>CCNA1 - CCNA5 Certifications</li>
                </div>
              </div>

              <div class="timeline-item mb-6">
                <div class="timeline-dot bg-accent"></div>
                <div class="ml-8">
                  <h4 class="text-subtitle-1 font-weight-bold accent-color">Software Development</h4>
                  <li>Engineering fundamentals</li>
                  <li>Python, JS, C++</li>
                  <li>Telecommunications</li>
                </div>
              </div>

              <div class="timeline-item mb-6">
                <div class="timeline-dot bg-accent"></div>
                <div class="ml-8">
                  <h4 class="text-subtitle-1 font-weight-bold accent-color">Business and Research</h4>
                  <li>Research methods</li>
                  <li>Profesisonal learning skills</li>
                </div>
              </div>
            </div>
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
  position: fixed;
  top: 2rem;
  left: 2rem;
  z-index: 10;
  width: 300px;
}

.content-container {
  min-height: 100vh;
  padding-top: 2rem;
  padding-bottom: 2rem;
}

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
