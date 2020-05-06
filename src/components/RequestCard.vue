<template>
  <v-card class="mx-auto" color="terciary">
    <v-card-text>
      <div></div>
      <p class="display-1 secondary2--text">
        {{ request.help.request_title }}
      </p>
      <h2 class="secondary2--text">  {{ request.help.help_type }} </h2>
      <div class="texto secondary2--text">
        {{ request.help.text }}
      </div>
      <div class="texto secondary2--text">
        {{ request.help.additional_info }}
      </div>
      <v-divider></v-divider>
      <div class="texto secondary2--text">
        {{ request.help.requester.name }}
      </div>
      <div class="texto secondary2--text">
        {{ request.help.address }}
      </div>
      <div class="texto secondary2--text">
        {{ request.help.telephone }}
      </div>

      <div class="texto secondary2--text">
        {{ request.status }}
      </div>

      <v-btn  color="secondary secondary2--text" @click="removeHelpRequest(request._id)" class="center">Cancel Request Help</v-btn>
    </v-card-text>
  </v-card>
</template>

<script>
import APIServices from '../services/Api'

export default {
  props: {
    request: Object,
    requestIdx: Number
  },
  methods: {
    removeHelpRequest (requestId) {
      APIServices.removeHelpRequest(requestId)
        .then(() => {
          location.reload()
        })
    }
  }
}
</script>

<style lang="scss">
  .texto{
    margin-top: 20px;
  }

  .center {
    left: 55px;
  }
</style>
