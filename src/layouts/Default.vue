<template>
  <div>
    <v-app-bar flat dense app class="semitransp overflow-hidden">
      <v-app-bar-nav-icon @click="drawer = !drawer" color="secondary"></v-app-bar-nav-icon>

      <v-spacer></v-spacer>

      <router-link to="/home">
        <h2 class="font">Aidbee</h2>
      </router-link>

      <v-spacer></v-spacer>
      <v-avatar v-if="img.length != 0" size="30">
        <v-img :src="img"></v-img>
      </v-avatar>
      <v-avatar v-else color="secondary" size="30">
        <span class="white--text">{{ name[0].toUpperCase() }}</span>
      </v-avatar>
    </v-app-bar>

    <v-navigation-drawer v-model="drawer" fixed xs temporary :width="windowWidth" color="terciary">
      <v-list nav dense>
        <v-list-item-group>
          <v-list-item @click="drawer = false">
            <v-icon color="secondary2">mdi-close</v-icon>
          </v-list-item>

          <v-divider></v-divider>

          <v-layout mt-4 column align-center>
            <v-flex>
              <v-avatar v-if="img.length != 0" size="50">
                <v-img :src="img"></v-img>
              </v-avatar>
              <v-avatar v-else color="secondary" size="50">
                <span class="white--text">{{ name[0].toUpperCase() }}</span>
              </v-avatar>
            </v-flex>
            <v-flex>
              <p class="secondary2--text mt-3 headline">{{ name }}</p>
              <!-- toUpperCase()  not working-->
            </v-flex>
          </v-layout>

          <v-divider></v-divider>

          <v-list-item class="mb-0 d-flex align-start" to="/myhelps">
            <v-list-item-icon>
              <v-icon color="secondary2" class="display">mdi-offer</v-icon>
            </v-list-item-icon>
            <v-list-item-title
              style="height:50px"
              class="d-flex align-center text body-1"
            >Helps I ask for</v-list-item-title>
          </v-list-item>

          <v-list-item class="mb-0" to="/requests">
            <v-list-item-icon>
              <v-icon color="secondary2">mdi-handshake</v-icon>
            </v-list-item-icon>
            <v-list-item-title
              style="height:50px"
              class="d-flex align-center text body-1"
            >Helps I offer</v-list-item-title>
          </v-list-item>
        </v-list-item-group>
      </v-list>
      <template v-slot:append>
        <v-divider></v-divider>
        <v-list-item class="mb-0" to="/myprofile">
          <v-list-item-icon>
            <v-icon color="secondary2">mdi-account-circle</v-icon>
          </v-list-item-icon>
          <v-list-item-title style="height:50px" class="d-flex align-center">User Profile</v-list-item-title>
        </v-list-item>

        <v-list-item class="mb-0" @click="logout" color="secondary">
          <v-list-item-icon>
            <v-icon color="secondary2">mdi-logout</v-icon>
          </v-list-item-icon>
          <v-list-item-title style="height:50px" class="d-flex align-center">Log Out</v-list-item-title>
        </v-list-item>
      </template>
    </v-navigation-drawer>
    <v-content>
      <router-view />
    </v-content>
    <Menu />
  </div>
</template>

<script>
import Menu from '@/components/Menu.vue'

export default {
  name: 'Default',
  data: () => ({
    name: localStorage.getItem('name'),
    img: localStorage.getItem('img'),
    drawer: false,
    windowWidth: ''
  }),
  components: {
    Menu
  },
  computed: {
    existsToken () {
      return localStorage.getItem('token')
    }
  },
  methods: {
    logout () {
      localStorage.clear()
      this.$router.push('/login')
    }
  },
  mounted: function () {
    this.status = !!localStorage.getItem('token')
    this.$root.$on('log', status => {
      this.status = status
    })
    this.windowWidth = window.innerWidth < 600 ? '75%' : '40%'
    window.onresize = () => {
      this.windowWidth = window.innerWidth < 600 ? '75%' : '40%'
    }
  }
}
</script>

<style lang='scss' scoped>
.font {
  color: #edc1bb;
}

.semitransp {
  background-color: rgba(4, 49, 112, 0.9) !important;
}

.d-flex {
  color: #043170;
}

</style>
