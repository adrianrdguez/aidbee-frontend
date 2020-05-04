<template v-slot:activator="{ on }">
  <div class="home">
    <div class="button">
    <v-btn large color="secondary" class="secondary2--text"  to="helps/new" >Create  Help</v-btn>
    </div>
    <HelpList :helps="allHelps" @deleteHelpList="deleteHelpHome"/>
  </div>
</template>
<script>
import APIServices from '../services/Api'
import HelpList from '@/components/HelpList.vue'
export default {
  name: 'Home',
  components: {
    HelpList
  },
  data () {
    return {
      allHelps: []
    }
  },
  created () {
    APIServices.getHelps(true)
      .then(res => (this.allHelps = res))
  },
  methods: {
    deleteHelpHome (idx) {
      this.allHelps.splice(idx, 1)
    },
    addNewHelp (newHelp) {
      this.allHelps.push(newHelp)
    }
  }
}
</script>
<style lang="css">

.button{
  display: flex;
  justify-content: center;
  margin-top: 20px;
}
</style>
