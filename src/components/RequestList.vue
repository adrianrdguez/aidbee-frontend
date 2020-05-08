<template>
  <v-container>
    <v-row>
      <v-col cols="12" sm="6" md="4" v-for="(request,idx) in requests" :key="idx">
        <v-card class="mx-auto" color="terciary">
          <v-card-text>
            <p class="display-1 secondary2--text">
              {{ request.help.request_title }}
              <v-btn rounded small v-bind:class="[{ brown: request.status == 'requested' }, { red: request.status == 'rejected' }, { green: request.status == 'accepted' }]">{{request.status}}</v-btn>
            </p>
            <br/>
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

            <v-btn color=" button secondary secondary2--text" @click="removeHelpRequest(request._id)" class="center">Cancel Request Help</v-btn>

          </v-card-text>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import APIServices from '../services/Api'

export default {
  props: {
    requests: Array,
    deleteRequestList: Function
  },
  methods: {
    removeHelpRequest (requestId) {
      APIServices.removeHelpRequest(requestId)
        .then(() => {
          location.reload()
        })
    }
  },
  computed: {
  }
}
</script>

<style lang="scss" scoped>
#list {
  display: flex;
  flex-wrap: wrap;
}

.button {
    left: 20%
  }
</style>
