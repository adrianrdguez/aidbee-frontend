<template>
  <v-card class="mx-auto" :to="`helps/${ help._id }`" color="terciary">
    <v-card-text>
      <div></div>
      <p class="display-1 secondary2--text">
        {{ help.request_title }}
      </p>
      <h2 class="secondary2--text">  {{ help.help_type }} </h2>
      <div class="secondary2--text">
        {{ help.text }}
      </div>
    </v-card-text>
    <v-card-actions>
       <v-btn text color="secondary2" @click="deleteHelpById(help._id)">Delete Help</v-btn>
       <v-btn text color="secondary2" @click="deleteHelpById(help._id)">See Help</v-btn>

    </v-card-actions>
  </v-card>
</template>

<script>

import APIServices from '../services/Api'

export default {
  props: {
    help: Object,
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
  }
}
</script>
