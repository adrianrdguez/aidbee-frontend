<template>
  <div id="list">
    <HelpCard v-for="(help,idx) in helps"
      :key="idx"
      :data="help"
      class="mx-4 my-3 secondary--text"
      color="transparent"
      :helpIdx="idx"
      :deleteHelpCard="deleteHelpCard"/>
  </div>
</template>

<script>
import HelpCard from '@/components/HelpCard.vue'

export default {
  components: {
    HelpCard
  },
  props: {
    helps: Array,
    deleteHelpList: Function
  },
  methods: {
    deleteHelpCard (idx) {
      this.$emit('deleteHelpList', idx)
    }
  }
}
</script>

<style lang="scss" scoped>
#list {
  display: flex;
  flex-wrap: wrap;
}
</style>
