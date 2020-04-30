<template>
  <v-card
    class="mx-auto"
    max-width="344"
  >
    <v-card-text>
      <div></div>
      <p class="display-1 secondary2--text">
        {{ data.request_title }}
      </p>
      <h2 class="secondary2--text">  {{ data.help_type }} </h2>
      <div class="secondary2--text">
        {{ data.text }}
      </div>
    </v-card-text>
    <v-card-actions>
       <v-btn
        text
        color="secondary2"
      >
        Modify Help
      </v-btn>
       <v-btn
        text
        color="secondary2"
      >
        Delete Help
      </v-btn>
    </v-card-actions>
  </v-card>
</template>
Word of the Day
be•n

<script>
export default {
  props: {
    data: Object
  }
}
</script>
