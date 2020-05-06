<template>
  <div>
    <v-app-bar class="transparent">
      <router-link to="/home">
        <h2 class="font">Aidbee</h2>
      </router-link>
      <v-spacer></v-spacer>
      <v-btn text to="/login" small class="mr-2" color="secondary">Iniciar sesión</v-btn>
      <v-btn to="/signup" rounded small color="secondary">Regístrate</v-btn>
    </v-app-bar>

    <v-content>
      <router-view />
    </v-content>
  </div>
</template>

<script>

export default {
  name: 'simple',
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
}

* {
  text-decoration-line: none;
}

.semitransp {
  background-color: rgba(4,49,112, 0.8) !important;
}
</style>
