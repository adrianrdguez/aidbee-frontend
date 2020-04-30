<template>
  <div id="list">
    <HelpCard v-for="(help,idx) in helps" :key="idx" :data="help" class="mx-4 my-3 secondary--text" color="transparent"/>
  </div>
</template>

<script>
import HelpCard from '@/components/HelpCard.vue'

export default {
  components: {
    HelpCard
  },
  props: {
    helps: Array
  },
  // methods: {
  //   addToList (newHelp) {
  //     this.$emit('addToList', newHelp)
  //   }
  // }
}
</script>

<style lang="scss" scoped>
#list {
  display: flex;
  flex-wrap: wrap;
}
</style>
