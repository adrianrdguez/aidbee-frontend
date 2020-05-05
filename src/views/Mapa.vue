<template>
  <div id="mapa">
    <mapbox
      access-token="pk.eyJ1IjoiYWRyaXJvZHJpbmF2YXMiLCJhIjoiY2s5OHMyZzVjMDRxbTNtbzQ5NzlyaW1rOSJ9.3EtvwOq2t8OtEZXLBDhXYw"
      :map-options="{
        style: 'mapbox://styles/adrirodrinavas/ck9u93xyj039s1iqlr12oidvd',
        center: [-15.428356, 28.136552],
        zoom: 13
      }"
    />
  </div>
</template>

<script>
import Mapbox from 'mapbox-gl-vue'

export default {
  components: { Mapbox }
}
</script>

<style lang="scss">
#map , #mapa {
  width: 100%;
  height: 100vh;
}
</style>

// pk.eyJ1IjoiYWRyaXJvZHJpbmF2YXMiLCJhIjoiY2s5dTRoOXl1MWtrdjNkcWM4YWdpM3Z2aCJ9.DM-PM5iYpKKtVVy7P4xb7Q
