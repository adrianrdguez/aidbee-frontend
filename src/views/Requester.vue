<template v-slot:activator="{ on }">
  <div class="home">
    <div>
      <p class=" letras subtitle-1 font-weight-bold secondary2--text">Helps I ask for</p>
    </div>
    <RequesterList :requests="allRequests"/>
  </div>
</template>

<script>

import APIServices from '../services/Api'
import RequesterList from '@/components/RequesterList.vue'

export default {
  name: 'Home',
  components: {
    RequesterList
  },
  data () {
    return {
      allRequests: []
    }
  },
  created () {
    APIServices.seeAllHelpRequestForAHelp()
      .then(res => {
        this.allRequests = res
      })
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
