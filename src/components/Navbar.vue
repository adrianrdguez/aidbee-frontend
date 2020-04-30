<template>
  <v-app-bar flat dense class="transparent">

    <router-link to="/">
      <h2 class="font">Aidbee</h2>
    </router-link>

    <v-spacer></v-spacer>

    <div v-if="!existsToken">
      <v-btn text to="/login" small class="mr-2" color="secondary">Iniciar sesión</v-btn>
      <v-btn to="/signup" rounded small color="secondary">Regístrate</v-btn>
    </div>

    <div v-else>
      <v-btn text small class="mr-2" color="secondary" to="/Popup">Create Help</v-btn>
      <v-avatar color="red" size="30">
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
.transparent {
  background-color: !important;
}
</style>
