<template>
  <v-container class="justify-center">
    <v-row justify="center">
      <v-col cols="12" sm="8" md="6">
        <h2 class="headline secondary--text">Request a delivery</h2>
        <v-container>
          <v-row>
              <v-col cols="12" sm="6">
              <v-select
                v-model="help_type"
                :items="['health', 'food', 'other']"
                label="Type of help*"
                required
                color="secondary"
                dark
              ></v-select>
            </v-col>
            <v-col cols="12">
              <v-text-field dark color="secondary" label="Help Title*" required v-model="request_title" placeholder="ie. I need my medicines"></v-text-field>
            </v-col>
            <v-col cols="12">
              <v-text-field dark color="secondary" label="Address*" required v-model="address"></v-text-field>
            </v-col>
            <v-col cols="12">
              <v-text-field dark color="secondary" label="What do you need?*" required v-model="text"></v-text-field>
            </v-col>
            <v-col cols="12">
              <v-text-field dark color="secondary" label="Telephone*" required v-model="telephone"></v-text-field>
            </v-col>
            <v-col cols="12">
              <v-text-field dark color="secondary" label="Additional Information" required v-model="addInfo"></v-text-field>
            </v-col>
          </v-row>
        </v-container>
        <small class="small" dark>*indicates required field</small><br>
        <v-btn  color="secondary2 white--text" to="/home">Cancel</v-btn>
        <v-spacer></v-spacer>
        <v-btn  color="secondary2 white--text" @click="save">Create Help</v-btn>
      </v-col>
    </v-row>
  </v-container>
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
    addInfo: ''
  }),
  methods: {
    save () {
      const newHelp = {
        help_type: this.help_type,
        request_title: this.request_title,
        address: this.address,
        text: this.text,
        telephone: this.telephone,
        additional_info: this.addInfo
      }
      APIServices.createHelp(newHelp)
        .then(newHelp => {
          this.$router.push('/home')
        })
        .catch(err => console.log(err))
    }
  }
}
</script>

<style lang="scss" scoped>
.small {
  color: #043170;
  bottom: 50px,
}

</style>
