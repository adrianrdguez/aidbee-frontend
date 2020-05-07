<template>
  <v-container>
    <v-row>
      <v-col cols="12" sm="6" md="4" v-for="(request,idx) in requests" :key="idx">
        <v-card class="mx-auto" color="terciary">
          <v-card-text>
            <p class="display-1 secondary2--text">
              {{ request.help.request_title }}
            </p>
            <h2 class="secondary2--text">  {{ request.help.help_type }} </h2>
            <div class="texto secondary2--text">
              hola
            </div>
            <div class="texto secondary2--text">
              {{ request.help.additional_info }}
            </div>
            <v-divider></v-divider>
            <div class="texto secondary2--text">
              {{ request.help.requester }}
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

            <div>
              <v-btn  color="secondary secondary2--text" @click="accept(request._id)" class="center">Accept Request Help</v-btn> <br />
              <v-btn  color="secondary secondary2--text" @click="refuse(request._id)" class="center">Refuse Request Help</v-btn> <br />
              <v-btn  color="secondary secondary2--text" @click="done(request._id)" class="center">Mark As Done Request Help</v-btn> <br />
            </div>
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
    requests: Array
  },
  methods: {
    accept (updRequest) {
      APIServices.acceptAHelpRequest(updRequest)
        .then(() => {
          location.reload()
        })
    },
    refuse (updRequest) {
      APIServices.refuseHelpRequest(updRequest)
        .then(() => {
          location.reload()
        })
    },
    done (updRequest) {
      APIServices.markAHelpRequestAsCompleted(updRequest)
        .then(() => {
          location.reload()
        })
    }
  }
}
</script>

<style lang="scss" scoped>
#list {
  display: flex;
  flex-wrap: wrap;
}
</style>
