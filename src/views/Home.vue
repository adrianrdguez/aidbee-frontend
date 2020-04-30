<template v-slot:activator="{ on }">
  <div class="home">
    <Navbar/>
    <Popup/>
    <HelpList :helps="allHelps" />
    <Menu/>
  </div>
</template>

<script>
import APIServices from '../services/Api'
import Navbar from '@/components/Navbar.vue'
import Menu from '@/components/Menu.vue'
import Popup from '@/components/Popup.vue'
import HelpList from '@/components/HelpList.vue'

export default {
  name: 'Home',
  components: {
    Navbar,
    Menu,
    Popup,
    HelpList
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

  }
}
</script>

<style lang="scss" scoped>

.home{
  background: linear-gradient(180deg, #043170 0%, #EDC1BB 100%);
  height: 100vh;
}
</style>
