<template>
  <div id="map">
   <GmapMap
      :center="center"
      :zoom="7"
      map-type-id="terrain"
      style="width: 100%; height: 100vh"
    >
      <GmapMarker
        :key="i"
        v-for="(m, i) in markers"
        :position="m.position"
        :clickable="true"
        :draggable="true"
        @click="center=m.position"
      />
    </GmapMap>
  </div>
</template>

<script>
import APIServices from '../services/Api'
export default {
  data () {
    return {
      allHelps: [],
      center: { lat: 20, lng: 20 },
      markers: []
    }
  },
  methods: {
    create (helpId) {
      APIServices.createHelpRequests(helpId, { message: 'quiero ayudar' })
        .then(request => {
          this.$router.push('/requests')
        })
        .catch(err => console.log(err))
    },
    loadData () {
      var that = this
      APIServices.getOtherUserHelps().then(function (data) {
        console.log(data)
        that.allHelps = data
        for (let i = 0; i < that.allHelps.length; i++) {
          const marker = {
            lat: that.allHelps[i].coordinates.lat,
            lng: that.allHelps[i].coordinates.lng
          }
          that.markers.push({ positionn: marker })
        }
        console.log(that.markers)
      })
    }
  },

  created () {
    this.loadData()
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
