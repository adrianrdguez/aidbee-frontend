<template>
  <v-container>
    <v-row>
      <v-col>
        <HelpList :helps="allHelps" @deleteHelpList="deleteHelpHome"/>
      </v-col>
    </v-row>
  </v-container>
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
  mounted () {
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
