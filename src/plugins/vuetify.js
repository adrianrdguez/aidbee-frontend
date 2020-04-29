// src/plugins/vuetify.js

import Vue from 'vue'
import Vuetify from 'vuetify/lib'

import colors from 'vuetify/lib/util/colors'

Vue.use(Vuetify)

export default new Vuetify({
  theme: {
    themes: {
      light: {
        primary: 'A5C4EE',
        secondary: 'EDC1BB',
        secondary2: '043170'
      }
    }
  }
})
