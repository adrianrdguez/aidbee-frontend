<template v-slot:activator="{ on }">
  <div class="home">
    <Navbar/>
    <v-btn block color="secondary" dark @click="popUp">Create Help</v-btn>
    <v-card id="card" v-for="(help,idx) in allHelps" :key="idx" class="mx-4 my-3 secondary--text" color="transparent">
      <div v-html="help.text"></div>
      <h3> {{help.request_title}} </h3>
    </v-card>
    <Menu/>
  </div>
</template>

<script>
import APIServices from '../services/Api'
import Navbar from '@/components/Navbar.vue'
import Menu from '@/components/Menu.vue'

export default {
  name: 'Home',
  components: {
    Navbar,
    Menu
  },
  data () {
    return {
      allHelps: []
    }
  },
  mounted () {
    APIServices.getHelps()
      .then(res => (this.allHelps = res))
  },
  methods: {
    popUp () {
      this.popUp = popUp
    }
  }
}
</script>

<style lang="scss" scoped>

.home{
  background: linear-gradient(180deg, #043170 0%, #EDC1BB 100%);
  height: 100vh;
}
</style>
