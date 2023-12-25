// Styles
import '@mdi/font/css/materialdesignicons.css'
import 'vuetify/styles'
import { aliases, mdi } from 'vuetify/iconsets/mdi-svg';

// Vuetify
import { createVuetify } from 'vuetify'
import Icon from '@/components/icons/EpistolamAdAstraIcon.vue'

export default createVuetify({
  icons: {
    defaultSet: "mdi",
    aliases,
    sets: {
      mdi,
    }
  }
})
