<template>
  <v-app class="color">
    <!-- <h1 class="white--text display-3">B I E N V E N I D O</h1> -->
    <component :is="layout">
      <router-view></router-view>
    </component>
  </v-app>
</template>

<script>
export default {
  name: 'App',
  computed: {
    layout () {
      return this.$route.meta.layout || 'simple'
    }
  }
}
</script>

<style lang="scss" scoped>
.color {
  background: linear-gradient(180deg, #043170 0%, #EDC1BB 100%) !important;
}

.white--text {
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: 100vh;
}
</style>
