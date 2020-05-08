<template>
  <v-container class="justify-center">
    <v-row justify="center">
      <v-col cols="12" sm="8" md="6" lg="4" v-for="(request,idx) in requests" :key="idx">
        <v-card class="mx-auto" height="auto" color="terciary">
          <v-card-text>
            <p class="display-1 secondary2--text">
              {{ request.help.request_title }}
            </p>
             <h2 class=" texto secondary2--text">
              {{ request.status }}
            </h2>
            <br/>
            <h2 class="secondary2--text">  {{ request.help.help_type }} </h2>
            <div class="texto secondary2--text">
              {{request.help.text}}
            </div>
            <div class=" subtitle-1 texto secondary2--text">
              {{ request.help.additional_info }}
            </div>
            <v-divider></v-divider>
            <div class="texto secondary2--text">
              <pre> {{ request.help.requester.name }} </pre>
            </div>
            <div class="texto secondary2--text">
              {{ request.help.address }}
            </div>
            <div class="texto secondary2--text">
              {{ request.help.telephone }}
            </div>

            <div>
              <v-btn  color="secondary secondary2--text" @click="accept(request._id, request.help._id)" class="center">Accept Request Help</v-btn> <br />
              <v-btn  color="secondary secondary2--text" @click="refuse(request._id, request.help._id)" class="center">Refuse Request Help</v-btn> <br />
              <v-btn  color="secondary secondary2--text" @click="done(request._id, request.help._id)" class="center">Mark As Done Request Help</v-btn> <br />
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
  data () {
    return {
      request_status_accept: 'accepted',
      request_status_refuse: 'refuse',
      request_status_done: 'done'
    }
  },
  props: {
    requests: Array
  },
  methods: {
    accept (updRequest, helpId) {
      const upHelp = {
        requestStatus: this.request_status_accept
      }
      APIServices.updateHelpById(helpId, upHelp)
        .then(() => {
        })
      APIServices.acceptAHelpRequest(updRequest)
        .then(() => {
          location.reload()
        })
    },
    refuse (updRequest, helpId) {
      const upHelp = {
        requestStatus: this.request_status_refuse
      }
      APIServices.updateHelpById(helpId, upHelp)
        .then(() => {
        })
      APIServices.refuseHelpRequest(updRequest)
        .then(() => {
          location.reload()
        })
    },
    done (updRequest, helpId) {
      const upHelp = {
        requestStatus: this.request_status_done
      }
      APIServices.updateHelpById(helpId, upHelp)
        .then(() => {
        })
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
