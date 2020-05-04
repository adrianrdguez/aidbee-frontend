<template>
  <div>
    <router-link to="/">
      <h2 class="font">Aidbee</h2>
    </router-link>

    <div>
      <div v-if="!existsToken" > <!-- NAVBAR NO LOGINEADO -->
        <v-btn text to="/login" small class="mr-2" color="secondary">Iniciar sesión</v-btn>
        <v-btn to="/signup" rounded small color="secondary">Regístrate</v-btn>
      </div>
      <div v-else>  <!-- NAVBAR LOGINEADO -->
        <v-app-bar flat dense app class="semitransp overflow-hidden">
        <v-app-bar-nav-icon @click="drawer = !drawer" color="secondary"></v-app-bar-nav-icon>

        <v-avatar color="secondary" size="30">
          <span class="white--text">{{name[0]}}</span>  <!-- toUpperCase() not -->
        </v-avatar>
        <!-- <v-btn icon @click="logout" color="secondary">
          <v-icon color="secondary">mdi-logout</v-icon>
        </v-btn> -->
        </v-app-bar>

          <v-navigation-drawer
          v-model="drawer"
          fixed
          xs
          temporary
          :width="windowWidth"
          color="terciary"
        >
        <v-list nav dense>
          <v-list-item-group>

          <v-list-item @click="drawer = false">
            <v-icon color="secondary2">mdi-close</v-icon>
          </v-list-item>

            <v-divider></v-divider>

            <v-layout mt-4 column align-center >
              <v-flex>
                <v-avatar>
                  <v-img src="https://randomuser.me/api/portraits/men/85.jpg"></v-img>
                </v-avatar>
              </v-flex>
              <v-flex>
                <p class="secondary2--text mt-3 headline">{{name}}</p> <!-- toUpperCase()  not working-->
              </v-flex>
            </v-layout>

            <v-divider></v-divider>

              <v-list-item class="mb-0 d-flex align-start">
                <v-list-item-icon>
                  <v-icon color="secondary2" class="display">mdi-offer</v-icon>
                </v-list-item-icon>
                <v-list-item-title style="height:50px" class="d-flex align-center text body-1">Help I ask for</v-list-item-title>
              </v-list-item>

              <v-list-item class="mb-0">
              <v-list-item-icon>
                  <v-icon color="secondary2">mdi-handshake</v-icon>
              </v-list-item-icon>
                <v-list-item-title style="height:50px" class="d-flex align-center text body-1">Help I offer</v-list-item-title>
              </v-list-item>

          </v-list-item-group>
        </v-list>
          <template v-slot:append>
            <v-divider></v-divider>
              <v-list-item class="mb-0">
              <v-list-item-icon>
                <v-icon color="secondary2">mdi-account-circle</v-icon>
              </v-list-item-icon>
                <v-list-item-title style="height:50px" class="d-flex align-center" >User Profile</v-list-item-title>
              </v-list-item>

              <v-list-item class="mb-0" @click="logout" color="secondary">
                <v-list-item-icon>
                <v-icon color="secondary2">mdi-logout</v-icon>
              </v-list-item-icon>
                <v-list-item-title style="height:50px" class="d-flex align-center" >Log Out</v-list-item-title>
              </v-list-item>
          </template>
        </v-navigation-drawer>
      </div>
    </div>
  </div>
</template>

<script>

export default {
  name: 'Navbar',
  data: () => ({
    name: localStorage.getItem('name'),
    drawer: false,
    windowWidth: ''
  }),
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
  color: #EDC1BB;
}

.semitransp {
  background-color: rgba(4,49,112, 0.8) !important;
}

.d-flex {
  color: #043170
}

</style>
