<template>
  <v-row justify="center">
    <v-dialog v-model="dialog" persistent max-width="600px">
      <template v-slot:activator="{ on }">
        <v-btn color="secondary" dark v-on="on" width="100%">Create Help</v-btn>
      </template>
      <v-card>
        <v-card-title>
          <span class="headline">Request a delivery</span>
        </v-card-title>
        <v-card-text>
          <v-container>
            <v-row>
                <v-col cols="12" sm="6">
                <v-select
                  v-model="help_type"
                  :items="['Health', 'Food', 'Other']"
                  label="Type of help*"
                  required
                ></v-select>
              </v-col>
              <v-col cols="12">
                <v-text-field label="Help Title*" required v-model="request_title"></v-text-field>
              </v-col>
              <v-col cols="12">
                <v-text-field label="Address*" required v-model="address"></v-text-field>
              </v-col>
              <v-col cols="12">
                <v-text-field label="What do you need?*" required v-model="text"></v-text-field>
              </v-col>
              <v-col cols="12">
                <v-text-field label="Telephone*" required v-model="telephone"></v-text-field>
              </v-col>
              <v-col cols="12">
                <v-text-field label="Additional Information" required v-model="addInfo"></v-text-field>
              </v-col>
            </v-row>
          </v-container>
          <small>*indicates required field</small>
        </v-card-text>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn color="blue darken-1" text @click="dialog = false">Close</v-btn>
          <v-btn color="blue darken-1" text @click="save">Create Help</v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </v-row>
</template>

<script>
import APIServices from '../services/Api'
export default {
  data: () => ({
    help_type: ['health', 'food', 'other'],
    request_title: '',
    address: '',
    text: '',
    telephone: '',
    addInfo: '',
    dialog: false
  }),
  methods: {
    save () {
      const newHelp = {
        request_title: this.request_title,
        address: this.address,
        text: this.text,
        telephone: this.telephone,
        addInfo: this.addInfo
      }
      console.log(APIServices.createHelp(newHelp))
        .then(() => {
          this.$router.push('/home')
        })
        .catch(err => console.log(err))
    }
  }
}
</script>

<style lang='scss' scoped>

</style>
