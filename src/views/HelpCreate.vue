<template>
  <v-container class="justify-center">
    <v-row justify="center">
      <v-col cols="12" xl="6" lg="6">
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
            label="Latitude"
            outlined
            required
            v-model="latitude"
            placeholder
          ></v-text-field>
        </v-col>
        <v-col>
          <v-text-field
            dark
            color="secondary"
            label="Longitude"
            outlined
            required
            v-model="longitude"
            placeholder
          ></v-text-field>
        </v-col>
        <small class="small" dark>*indicates required field</small>
        <br />
        <div class="buttons">
          <v-btn class="cancel" color="secondary secondary2--text" to="/home">Cancel</v-btn>
          <v-btn class="create" color="secondary2 secondary--text" @click="save">Create Help</v-btn>
        </div>
      </v-col>
      <v-col cols="12" xl="6" lg="6">
        <v-col>
          <h2 class="headline-1 secondary--text">Mark where you live</h2>
        </v-col>
        <v-col>
          <Mapa @elcliclado="clicked"></Mapa>
        </v-col>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import APIServices from '../services/Api'
import Mapa from '../components/Mapa'

export default {
  data: () => ({
    help_type: '',
    request_title: '',
    address: '',
    text: '',
    telephone: '',
    addInfo: '',
    latitude: '',
    longitude: ''
  }),
  methods: {
    clicked (position) {
      this.latitude = position.lngLat.lat
      this.longitude = position.lngLat.lng
    },
    save () {
      const newHelp = {
        help_type: this.help_type,
        request_title: this.request_title,
        address: this.address,
        text: this.text,
        telephone: this.telephone,
        additional_info: this.addInfo,
        latitude: this.latitude,
        longitude: this.longitude
      }
      APIServices.createHelp(newHelp)
        .then(newHelp => {
          this.$router.push('/home')
        })
        .catch(err => console.log(err))
    }
  },
  components: {
    Mapa
  }
}
</script>

<style lang="scss" scoped>
.small {
  color: white;
  bottom: 50px;
  margin-left: 10px;
}
.create {
  margin-left: 30px;
}

.headline-1 {
  margin-left: 10px;
}

.buttons {
  text-align: center;
}
</style>
