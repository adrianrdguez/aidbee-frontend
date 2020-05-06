<template>
  <div id="map">
    <MglMap :accessToken="accessToken" :mapStyle="mapStyle" @load="onMapLoad">
        <MglMarker
          v-for="(help, idx) in allHelps"
          :key="idx"
          debugger
          :coordinates="[help.coordinates.lng, help.coordinates.lat]"
          color="blue"
        >
          <MglPopup class="ayudas">
              <v-card
                class="mx-auto"
                width="1000"
              >
              <v-card-text>
                <div>
                  Type of help: {{help.help_type}}
                </div>
                </br>
                <p class="display-1 text--primary">
                  Help: {{help.request_title}}
                </p>
                <p></p>
                  User name: {{help.requester.name}}
                </p>
                <div class="text--primary">
                  Address :{{help.address}}
                </div>
                </br>
                <div class="text--primary">
                 Information: {{help.text}}
                </div>
                </br>
                <div class="text--primary">
                 Telephone number: {{help.telephone}}
                </div>
              </v-card-text>
              <v-card-actions>
                <v-btn
                  @click="create(help._id)"
                  app
                  class="help"
                  color="secondary2 white--text"
                >
                  I want to help!
                </v-btn>
              </v-card-actions>
            </v-card>
          </MglPopup>
        </MglMarker>
    </MglMap>
  </div>
</template>

<script>
import Mapbox from 'mapbox-gl'
import { MglMap, MglPopup, MglMarker } from 'vue-mapbox'
import APIServices from '../services/Api'

export default {
  components: {
    MglMap,
    MglMarker,
    MglPopup
  },
  data () {
    return {
      accessToken:
        'pk.eyJ1IjoiYWRyaXJvZHJpbmF2YXMiLCJhIjoiY2s5OHMyZzVjMDRxbTNtbzQ5NzlyaW1rOSJ9.3EtvwOq2t8OtEZXLBDhXYw',
      mapStyle: 'mapbox://styles/adrirodrinavas/ck9u93xyj039s1iqlr12oidvd',
      allHelps: []
    }
  },

  created () {
    this.mapbox = Mapbox
  },
  methods: {
    onMapLoad ({ map }) {
    },
    create (helpId) {
      APIServices.createHelpRequests(helpId, { message: 'quiero ayudar' })
        .then(request => {
          this.$router.push('/requests')
        })
        .catch(err => console.log(err))
    }
  },
  mounted () {
    APIServices.getOtherUserHelps().then(res => {
      this.allHelps = res
      console.log(res) // CLG AYUDAS
    })
  }
}
</script>

<style lang="scss">
#map,
#mapa {
  width: 100%;
  height: 100vh;
}
#ayudas{
  width: 1000px;
}

.help {
  left: 20px
}

</style>
