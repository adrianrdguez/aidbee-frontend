<template>

  <v-bottom-navigation v-model="bottomNav" dark active-class="active-menu-option" app color="secondary2" background-color="secondary">
    <v-btn value="getHelp" width="30%">
      <span>Get Help</span>
      <v-icon>mdi-history</v-icon>
    </v-btn>
    <v-btn value="offerHelp" width="30%" color="">
      <span >Get Help</span>
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
  background-color: #043170 !important;
  color: white !important;
}
</style>
