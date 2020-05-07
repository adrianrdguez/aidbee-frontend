<template v-slot:activator="{ on }">
  <div class="home">
    <RequestList :requests="allRequests"/>
  </div>
</template>

<script>

import APIServices from '../services/Api'
import RequestList from '@/components/RequestList.vue'

export default {
  name: 'Home',
  components: {
    RequestList
  },
  data () {
    return {
      allRequests: []
    }
  },
  created () {
    APIServices.getAllMyHelpRequests()
      .then(res => {
        console.log(res)
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
