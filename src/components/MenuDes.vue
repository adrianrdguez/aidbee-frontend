<template>
  <v-app-bar flat dense  app class="semitransp">
    <div>
        <v-app-bar-nav-icon class="overflow-hidden" @click="drawer = true"></v-app-bar-nav-icon>

        <v-navigation-drawer
          v-model="drawer"
          bottom
          fixed
          xs
          :width="windowWidth"
        >
          <v-list nav dense>
            <v-list-item-group v-model="group">

            <v-list-item @click="drawer = false">
              <v-icon>mdi-close</v-icon>
            </v-list-item>

              <v-divider></v-divider>

              <v-list-item class="mb-0">
                <v-list-item-title style="height:50px" class="d-flex align-center d-flex align-center">Foo</v-list-item-title>
              </v-list-item>

              <v-divider></v-divider>

              <v-list-item class="mb-0">
                <v-list-item-title style="height:50px" class="d-flex align-center d-flex align-center"  >Bar</v-list-item-title>
              </v-list-item>

              <v-list-item class="mb-0">
                <v-list-item-title style="height:50px" class="d-flex align-center d-flex align-center" >Fizz</v-list-item-title>
              </v-list-item>

              <v-list-item class="mb-0">
                <v-list-item-title style="height:50px" class="d-flex align-center d-flex align-center" >Buzz</v-list-item-title>
              </v-list-item>
            </v-list-item-group>
          </v-list>
        </v-navigation-drawer>
      </div>

    <v-spacer></v-spacer>
    <router-link to="/">
      <h2 class="font">Aidbee</h2>
    </router-link>
    <v-spacer></v-spacer>

    <div v-if="!existsToken">
      <v-btn text to="/login" small class="mr-2" color="secondary">Iniciar sesión</v-btn>
      <v-btn to="/signup" rounded small color="secondary">Regístrate</v-btn>
    </div>

    <div v-else>
      <v-avatar color="secondary" size="30">
        <span class="white--text">PP</span>
      </v-avatar>
      <v-btn icon @click="logout" color="secondary">
        <v-icon color="secondary">mdi-logout</v-icon>
      </v-btn>
    </div>

  </v-app-bar>
</template>

<script>

export default {
  name: 'Navbar',
  components: {
  },
  data: () => ({
    drawer: false,
    status: false,
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
  mounted: {
    function () {
      this.status = !!localStorage.getItem('token')
      this.$root.$on('log', status => {
        this.status = status
      })
      this.windowWidth = window.innerWidth < 600 ? '75%' : '50%'
      window.onresize = () => {
        this.windowWidth = window.innerWidth < 600 ? '75%' : '50%'
      }
    }
  }
}

</script>
 <style lang='scss' scoped>
.font {
  color: #EDC1BB;
  ;
}

* {
  text-decoration-line: none;
}
.max {
  width: auto !important;
}
.semitransp {
  background-color: rgba(4,49,112, 0.8) !important;
}
</style>
