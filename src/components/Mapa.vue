<template>
  <div id="map">
    <MglMap :accessToken="accessToken" :mapStyle="mapStyle" @load="onMapLoad">
      <MglMarker v-if="coordinates != ''" :coordinates="coordinates" color="blue" />
    </MglMap>
  </div>
</template>

<script>
import Mapbox from 'mapbox-gl'
import { MglMap, MglMarker } from 'vue-mapbox'

export default {
  components: {
    MglMap,
    MglMarker
  },
  data () {
    return {
      accessToken: 'pk.eyJ1IjoiYWRyaXJvZHJpbmF2YXMiLCJhIjoiY2s5OHMyZzVjMDRxbTNtbzQ5NzlyaW1rOSJ9.3EtvwOq2t8OtEZXLBDhXYw',
      mapStyle: 'mapbox://styles/adrirodrinavas/ck9u93xyj039s1iqlr12oidvd',
      coordinates: ''
    }
  },
  props: {
    clickedEvent: Function
  },
  created () {
    this.mapbox = Mapbox
  },
  methods: {
    onMapLoad ({ map }) {
      map.on('click', e => {
        this.coordinates = [e.lngLat.lng, e.lngLat.lat]
        this.$emit('clickedEvent', e)
      })
    }
  }
}
</script>

<style lang="scss">
#map , #mapa {
  width: 100%;
  height: 100vh;
}
</style>
