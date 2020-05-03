<template>
    <v-container class="justify-center">
    <v-row justify="center">
      <v-col cols="12" sm="8" md="6">
        <h2 class="headline secondary--text">Request a delivery</h2>
        <v-container>
          <v-row>
              <v-col cols="12" sm="6">
            </v-col>
            <v-col cols="12">
              <v-text-field dark color="secondary" label="Type of help" required> </v-text-field>
            </v-col>
            <v-col cols="12">
              <v-text-field dark color="secondary" label="Help Title" required  placeholder="ie. I need my medicines"></v-text-field>
            </v-col>
            <v-col cols="12">
              <v-text-field dark color="secondary" label="Address" required ></v-text-field>
            </v-col>
            <v-col cols="12">
              <v-text-field dark color="secondary" label="What do you need?" required ></v-text-field>
            </v-col>
            <v-col cols="12">
              <v-text-field dark color="secondary" label="Telephone" required></v-text-field>
            </v-col>
            <v-col cols="12">
              <v-text-field dark color="secondary" label="Additional Information" required></v-text-field>
            </v-col>
          </v-row>
        </v-container>
        <v-btn  color="secondary2 white--text" to="/home">Cancel</v-btn>
        <v-spacer></v-spacer>
        <v-btn  color="secondary2 white--text">Create Help</v-btn>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
  export default {
    
  }
</script>

<style lang="scss" scoped>

</style>