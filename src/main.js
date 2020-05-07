import Vue from 'vue'
import App from './App.vue'
import router from './router'
import vuetify from './plugins/vuetify'
import firebase from 'firebase'

import Default from './layouts/Default.vue'
import Simple from './layouts/Simple.vue'

Vue.component('default', Default)
Vue.component('simple', Simple)

var firebaseConfig = {
  apiKey: process.env.VUE_APP_API_KEY_FIREBASE,
  authDomain: 'aidbee-b3976.firebaseapp.com',
  databaseURL: 'https://aidbee-b3976.firebaseio.com',
  projectId: 'aidbee-b3976',
  storageBucket: 'aidbee-b3976.appspot.com',
  messagingSenderId: '229322164721',
  appId: '1:229322164721:web:b231e498b89eb65db81c50'
}

firebase.initializeApp(firebaseConfig)

Vue.config.productionTip = false

new Vue({
  router,
  vuetify,
  render: h => h(App)
}).$mount('#app')
