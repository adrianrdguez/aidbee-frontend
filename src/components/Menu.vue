<template>
  <v-bottom-navigation
    class="semitransp"
    v-model="bottomNav"
    dark
    active-class="active-menu-option"
    app
    fixed
    color="secondary"
    >

    <v-btn value="getHelp" width="30%" to="/home">
      <span>Get Help</span>
      <v-icon>mdi-history</v-icon>
    </v-btn>

    <v-btn value="offerHelp" width="30%" color="" to="/mapa">
      <span>Offer Help</span>
      <v-icon>mdi-history</v-icon>
    </v-btn>

  </v-bottom-navigation>
</template>

<script>
export default {
  data () {
    return {
      bottomNav: 'getHelp'
    }
  }
}
</script>
<style lang="scss">
.active-menu-option {
  background-color: #EDC1BB !important;
  color: black !important;
}

.semitransp {
  background-color: rgba(4,49,112, 1) !important;
}
</style>
