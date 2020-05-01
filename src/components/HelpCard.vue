<template>
  <v-card class="mx-auto" max-width="344">
    <v-card-text>
      <div></div>
      <p class="display-1 secondary2--text">
        {{ data.request_title }}
      </p>
      <h2 class="secondary2--text">  {{ data.help_type }} </h2>
      <div class="secondary2--text">
        {{ data.text }}
      </div>
    </v-card-text>
    <v-card-actions>
       <!-- <PopupModify></PopupModify> -->
       <v-btn text color="secondary2" @click="deleteHelpById(data._id)">Delete Help</v-btn>
    </v-card-actions>
  </v-card>
</template>

<script>

import APIServices from '../services/Api'
// import PopupModify from '@/components/PopupModify.vue'

export default {
  props: {
    data: Object,
    helpIdx: Number,
    deleteHelpCard: Function
  },
  methods: {
    deleteHelpById (helpId) {
      APIServices.deleteHelpById(helpId)
        .then(() => {
          this.$emit('deleteHelpCard', this.helpIdx)
          location.reload()
        })
        .catch(err => console.log(err))
    }
  },
  components: {
    // PopupModify
  }
}
</script>
