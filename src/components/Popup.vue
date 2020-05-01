<template>
  <v-row justify="center">
    <v-dialog v-model="dialog" persistent max-width="590px">
      <template v-slot:activator="{ on }">
        <v-btn color="secondary" class="secondary2--text" v-on="on">Create Help</v-btn>
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
                  :items="['health', 'food', 'other']"
                  label="Type of help*"
                  required
                ></v-select>
              </v-col>
              <v-col cols="12">
                <v-text-field label="Help Title*" required v-model="request_title" placeholder="ie. I need my medicines"></v-text-field>
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
    help_type: '',
    request_title: '',
    address: '',
    text: '',
    telephone: '',
    addInfo: '',
    dialog: false
  }),
  props: {
    addNewHelp: Function
  },
  methods: {
    save () {
      const newHelp = {
        help_type: this.help_type,
        request_title: this.request_title,
        address: this.address,
        text: this.text,
        telephone: this.telephone,
        addInfo: this.addInfo
      }
      APIServices.createHelp(newHelp)
        .then(newHelp => {
          this.dialog = false
          this.$emit('addNewHelp', newHelp)
          location.reload()
        })
        .catch(err => console.log(err))
    }
  }
}
</script>

<style lang='scss' scoped>

</style>
