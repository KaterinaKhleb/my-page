import { createVuetify } from 'vuetify'
import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives'

export default defineNuxtPlugin((app) => {
  const vuetify = createVuetify({
    components,
    directives,
    theme: {
      defaultTheme: 'light',
      themes: {
        light: {
          colors: {
            background: '#f4f4ef',
            primary: '#f7a027',
            surface: '#242424'
          }
        }
      }
    }
  })
  app.vueApp.use(vuetify)
})