<template>
  <div id="list">
    <HelpCard/>
  </div>
</template>

<script>
import HelpCard from '@/components/HelpCard.vue'

export default {
  components: {
    HelpCard
  }
  // props: {
  //   help: Array
  // },
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
