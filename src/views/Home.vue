<template v-slot:activator="{ on }">
  <div class="home">
    <div>
      <p class=" letras subtitle-1 font-weight-bold secondary2--text">Your helps</p>
    </div>
    <div class="button">
      <v-btn large color="secondary" class="secondary2--text"  to="helps/new" >Create  Help</v-btn>
    </div>
      <br/>
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
    APIServices.getHelps()
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

.letras {
  display: flex;
  justify-content: center;
  margin-top: 5px;
  background-color: #EDC1BB
}

</style>
