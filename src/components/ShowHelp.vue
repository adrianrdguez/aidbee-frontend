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
              <v-text-field dark color="secondary" label="Type of help" required v-model="typeOfHelp"></v-text-field>
            </v-col>
            <v-col cols="12">
              <v-text-field dark color="secondary" label="Help Title" required  v-model="request_title"></v-text-field>
            </v-col>
            <v-col cols="12">
              <v-text-field dark color="secondary" label="Address" required v-model="address"></v-text-field>
            </v-col>
            <v-col cols="12">
              <v-text-field dark color="secondary" label="What do you need?" required v-model="text"></v-text-field>
            </v-col>
            <v-col cols="12">
              <v-text-field dark color="secondary" label="Telephone" required v-model="telephone"></v-text-field>
            </v-col>
            <v-col cols="12">
              <v-text-field dark color="secondary" label="Additional Information" required v-model="addInfo"></v-text-field>
            </v-col>
          </v-row>
        </v-container>
        <v-btn  color="secondary2 white--text" to="/home">Cancel</v-btn>
        <v-spacer></v-spacer>
        <v-btn  color="secondary2 white--text" @click="edit">Edit Help</v-btn>
        <v-btn text color="secondary2" @click="deleteHelpById(help._id)">Delete Help</v-btn>
      </v-col>
    </v-row>
  </v-container>
</template>
<script>
import APIServices from '../services/Api'
export default {
  props: {
    help: Object,
    helpIdx: Number,
    deleteHelpCard: Function
  },
  data () {
    return {
      typeOfHelp: '',
      request_title: '',
      address: '',
      text: '',
      telephone: '',
      addInfo: ''
    }
  },
  methods: {
    edit () {
      const upHelp = {
        help_type: this.help_type,
        request_title: this.request_title,
        address: this.address,
        text: this.text,
        telephone: this.telephone,
        additional_info: this.addInfo
      }
      APIServices.updateHelpById(this.$route.params.id, upHelp)
        .then(() => {
          this.$router.push('/home')
        })
        .catch(err => console.log(err))
    },
    deleteHelpById (helpId) {
      APIServices.deleteHelpById(helpId)
        .then(() => {
          this.$emit('deleteHelpCard', this.helpIdx)
          this.$router.push('/home')
          location.reload()
        })
        .catch(err => console.log(err))
    }
  },
  mounted () {
    APIServices.getHelpById(this.$route.params.id)
      .then(help => {
        this.typeOfHelp = help.help_type
        this.request_title = help.request_title
        this.address = help.address
        this.text = help.text
        this.telephone = help.telephone
        this.addInfo = help.additional_info
      })
  }
}
</script>

<style lang="scss" scoped>
</style>
