<template>
  <div id="map">
    <div fixed>
      <p class="letras subtitle-1 font-weight-bold secondary2--text" fixed>Help other people</p>
    </div>
    <div class="filter-ctrl">
      <input
        id="filter-input"
        type="text"
        name="filter"
        placeholder="Filter by name"
      />
    </div>
    <MglMap :accessToken="accessToken" :mapStyle="mapStyle">
      <MglMarker
        v-for="(help, idx) in allHelps"
        :key="idx"
        :coordinates="[help.lng, help.lat]"
        color="blue"
      >
        <MglPopup class="ayudas">
          <v-card class="mx-auto" width="1000">
            <v-card-text>
              <div>Type Of Help: {{help.help_type}}</div>
              <br />
              <h2 class="text--primary">Help: {{help.request_title}}</h2>
              <br />
              <p>User Name: {{help.requester.name}}</p>
              <br />
              <div class="text--primary">Information: {{help.text}}</div>
              <br/>
            </v-card-text>
            <v-card-actions>
              <v-btn
                @click="create(help._id)"
                app
                class="help"
                color="secondary2 white--text"
              >I want to help!</v-btn>
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
      allHelps: [],
      request_status: 'requested',
      marker: this.MglMarker
    }
  },

  created () {
    this.mapbox = Mapbox
  },
  methods: {
    create (helpId, updHelp) {
      const upHelp = {
        requestStatus: this.request_status
      }
      APIServices.updateHelpById(helpId, upHelp).then(() => {})
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
    })
  },
  computed: {
    requestStatus () {
      if (
        this.help.requestStatus !== '' ||
        this.help.requestStatus !== 'requested'
      ) {
        return this.marker.remove()
      }
      return console.log('hola')
    }
  }
}
</script>

<style lang="scss">
#map,
#mapa {
  width: 100%;
  height: 100vh;
}
#ayudas {
  width: 1000px;
}

.help {
  left: 20px;
}

.letras {
  display: flex;
  justify-content: center;
  margin-top: 5px;
  background-color: #edc1bb;
}

.filter-ctrl input[type='text'] {
font: 12px/20px 'Helvetica Neue', Arial, Helvetica, sans-serif;
width: 100%;
border: 0;
background-color: #fff;
margin: 0;
color: rgba(0, 0, 0, 0.5);
padding: 10px;
box-shadow: 0 0 0 2px rgba(0, 0, 0, 0.1);
border-radius: 3px;
width: 180px;
}
</style>
