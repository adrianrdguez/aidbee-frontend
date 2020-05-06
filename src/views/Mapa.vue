<template>
  <div id="map">
    <MglMap :accessToken="accessToken" :mapStyle="mapStyle" @load="onMapLoad">
      <div>
        <MglMarker
          v-for="(coordinate, idx)  in coordinates"
          :key="idx"
          :coordinates="coordinate"
          color="blue"
        >
          <MglPopup>
            <VCard>
              {{allHelps}}
            </VCard>
          </MglPopup>
        </MglMarker>
      </div>
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
      coordinates: [],
      allHelps: []
    }
  },

  created () {
    this.mapbox = Mapbox
  },
  methods: {
    onMapLoad ({ map }) {}
  },
  mounted () {
    APIServices.getHelps(false)
      .then(res => (
        this.allHelps = res
      ))
  }
}
</script>

<style lang="scss">
#map,
#mapa {
  width: 100%;
  height: 100vh;
}
</style>
