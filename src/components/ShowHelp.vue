<template>
  <v-container class="justify-center">
    <v-row justify="center">
      <v-col cols="12" sm="8" md="6" lg="4">
        <v-col>
          <h2 class="headline-1 secondary--text">Request a delivery</h2>
        </v-col>
        <v-col>
          <v-select
            v-model="help_type"
            :items="['Health', 'Food', 'Other']"
            label="Type of help *"
            outlined
            required
            color="secondary"
            dark
            placeholder="ie. Food"
          ></v-select>
        </v-col>
        <v-col>
          <v-text-field
            dark
            color="secondary"
            label="Help Title *"
            outlined
            required
            v-model="request_title"
            placeholder="ie. I need my medicines"
          ></v-text-field>
        </v-col>
        <v-col>
          <v-text-field
            dark
            color="secondary"
            label="Address *"
            outlined
            required
            v-model="address"
            placeholder="ie. Calle Fernando Guanarteme 95, 1A"
          ></v-text-field>
        </v-col>
        <v-col>
          <v-text-field
            dark
            color="secondary"
            label="What do you need? *"
            outlined
            required
            v-model="text"
            placeholder="ie. I have a headache and I do not have my medicines"
          ></v-text-field>
        </v-col>
        <v-col>
          <v-text-field
            dark
            color="secondary"
            label="Telephone *"
            outlined
            required
            v-model="telephone"
            placeholder="ie. 639874512"
          ></v-text-field>
        </v-col>
        <v-col>
          <v-text-field
            dark
            color="secondary"
            label="Additional Information"
            outlined
            required
            v-model="addInfo"
            placeholder="ie. My doorbell doesn´t work."
          ></v-text-field>
        </v-col>
        <v-col>
          <v-text-field
            dark
            color="secondary"
            label="Coordinates"
            outlined
            required
            v-model="coordinates"
            placeholder
          ></v-text-field>
        <span class="small white--text" dark>*indicates required field</span>
        </v-col>
        <br />
        <div class="button">
        <v-btn  color="secondary secondary2--text" to="/home">Cancel</v-btn>
        <v-btn class="delete" color="secondary secondary2--text" @click="deleteHelpById(help._id)">Delete Help</v-btn>
        <v-btn class="edit" color="secondary2 white--text" @click="edit">Edit Help</v-btn>
        </div>
        </v-col>
      <v-col cols="12" sm="8" md="6" lg="4">
        <v-col>
          <h2 class="headline-1 secondary--text">Mark where you live</h2>
        </v-col>
        <v-col>
            <!-- <Mapa @clickedEvent="clicked"></Mapa>-->
        </v-col>
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
      help_type: '',
      request_title: '',
      address: '',
      text: '',
      telephone: '',
      addInfo: '',
      coordinates: ''
    }
  },
  methods: {
    clicked (position) {
      this.coordinates = position.lngLat
    },
    edit () {
      const upHelp = {
        help_type: this.help_type,
        request_title: this.request_title,
        address: this.address,
        text: this.text,
        telephone: this.telephone,
        additional_info: this.addInfo,
        coordinates: this.coordinates
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
        this.help_type = help.help_type
        this.request_title = help.request_title
        this.address = help.address
        this.text = help.text
        this.telephone = help.telephone
        this.addInfo = help.additional_info
        this.coordinates = help.coordinates
      })
  }
}
</script>

<style lang="scss" scoped>
.edit{
margin-left: 20px;
}
.delete{
margin-left: 20px;
}
.small {
  left: 90px;
}
</style>
