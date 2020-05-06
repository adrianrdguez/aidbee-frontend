<template>
  <v-container>
    <v-row>
      <v-col cols="12" sm="6" md="4" v-for="(request,idx) in requests"
          :key="idx">
        <RequestCard
          :request="request"
          class="my-3 secondary--text"
          color="transparent"
          :requestIdx="idx"
          :deleteHelpCard="deleteHelpCard"/>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import RequestCard from '@/components/RequestCard.vue'

export default {
  components: {
    RequestCard
  },
  props: {
    requests: Array,
    deleteRequestList: Function
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
