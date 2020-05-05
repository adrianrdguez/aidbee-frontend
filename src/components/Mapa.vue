<template>
  <div id="app">
    <mapbox
      access-token="pk.eyJ1IjoiYWRyaXJvZHJpbmF2YXMiLCJhIjoiY2s5OHMyZzVjMDRxbTNtbzQ5NzlyaW1rOSJ9.3EtvwOq2t8OtEZXLBDhXYw"
      :map-options="{
        style: 'mapbox://styles/adrirodrinavas/ck9u93xyj039s1iqlr12oidvd',
        center: [-15.436009, 28.117173],
        zoom: 13,
      }"
      :geolocate-control="{
        show: true,
        position: 'top-left',
      }"
      @map-load="loaded"
      @map-click="clicled"
    />
  </div>
</template>

<script>
import Mapbox from 'mapbox-gl-vue'

export default {
  props: {
    elcliclado: Function
  },
  components: { Mapbox },
  data () {
    return {
      markers: []
    }
  },
  methods: {
    clicled (map, position) {
      this.$emit('elcliclado', position)
    },
    loaded (map) {
      map.addLayer({
        id: 'points',
        type: 'symbol',
        source: {
          type: 'geojson',
          data: {
            type: 'FeatureCollection',
            features: [
              {
                type: 'Feature',
                geometry: {
                  type: 'Point',
                  coordinates: [-77.03238901390978, 38.913188059745586]
                },
                properties: {
                  title: 'Mapbox DC',
                  icon: 'monument'
                }
              },
              {
                type: 'Feature',
                geometry: {
                  type: 'Point',
                  coordinates: [-122.414, 37.776]
                },
                properties: {
                  title: 'Mapbox SF',
                  icon: 'harbor'
                }
              }
            ]
          }
        },
        layout: {
          'icon-image': '{icon}-15',
          'text-field': '{title}',
          'text-font': ['Open Sans Semibold', 'Arial Unicode MS Bold'],
          'text-offset': [0, 0.6],
          'text-anchor': 'top'
        }
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
