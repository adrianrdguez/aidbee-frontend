<template>
  <div class="color">
    <v-app>
      <component :is="layout">
        <router-view></router-view>
      </component>
    </v-app>
  </div>
</template>

<script>

export default {
  name: 'App',
  components: {
  },
  computed: {
    layout () {
      return this.$route.meta.layout || 'default'
    }
  }
}
</script>

<style lang="scss" scoped>
.color {
  background: linear-gradient(180deg, #043170 0%, #EDC1BB 100%);
}
</style>
