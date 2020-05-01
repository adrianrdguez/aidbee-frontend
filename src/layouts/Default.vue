<template>
  <div>
    <Navbar />

    <v-content>
      <router-view />
    </v-content>
    <Menu/>

  </div>
</template>

<script>
import Navbar from '@/components/Navbar.vue'
import Menu from '@/components/Menu.vue'

export default {
  name: 'Default',
  components: {
    Navbar,
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
.max {
  width: auto !important;
}
</style>
