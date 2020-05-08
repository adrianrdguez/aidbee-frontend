<template>
  <v-container class="justify-center">
    <v-row justify="center">
      <v-col cols="12" sm="8">
        <v-card class="mx-auto" :to="`helps/${ help._id }`" color="terciary">
          <v-card-text>
            <div>
            <p class="display-1 secondary2--text">
              {{ help.request_title }}
            </p>
            </div>
            <h2 class="secondary2--text">  {{ help.help_type }} </h2>

            <div class="texto secondary2--text">
              {{ help.text }}
            </div> <br/>
            <v-btn class="secondary2 secondary--text button" >
              See Help
            </v-btn>
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>

export default {
  props: {
    help: Object,
    helpIdx: Number
  }
}
</script>

<style lang="scss">
  .texto{
    margin-top: 20px;
  }

  .button {
    left: 33%
  }
</style>
