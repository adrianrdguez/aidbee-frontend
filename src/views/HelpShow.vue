<template>
  <v-container>
    <v-row>
      <v-col>
        <ShowHelp :help="help"/>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import APIServices from '../services/Api'
import ShowHelp from '@/components/ShowHelp.vue'

export default {
  name: 'Home',
  components: {
    ShowHelp
  },
  data () {
    return {
      help: {}
    }
  },
  mounted () {
    APIServices.getHelpById(this.$route.params.id)
      .then(res => (this.help = res))
      .catch(err => {
        console.log(err)
      })
  },
  
}
</script>
