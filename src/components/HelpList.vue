<template>
  <v-container>
    <v-row>
      <v-col cols="12" sm="6" md="4" v-for="(help,idx) in helps"
          :key="idx">
        <HelpCard
          :help="help"
          class="my-3 secondary--text"
          color="transparent"
          :helpIdx="idx"
          :deleteHelpCard="deleteHelpCard"/>
      </v-col>
    </v-row>
  </v-container>
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
