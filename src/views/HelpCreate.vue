<template>
  <v-container class="justify-center">
    <v-row justify="center">
      <v-col cols="12" sm="8" md="6">
        <h2 class="headline-1 secondary--text">Request a delivery</h2>
          <v-container>
            <v-row>
                <v-col cols="12" sm="6">
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
              <v-col cols="12">
                <v-text-field
                dark
                color="secondary"
                label="Help Title *"
                outlined
                required
                v-model="request_title"
                placeholder="ie. I need my medicines"
                >
                </v-text-field>
              </v-col>
              <v-col cols="12">
                <v-text-field
                dark
                color="secondary"
                label="Address *"
                outlined
                required
                v-model="address"
                placeholder="ie. Calle Fernando Guanarteme 95, 1A"
                >
                </v-text-field>
              </v-col>
              <v-col cols="12">
                <v-text-field
                dark
                color="secondary"
                label="What do you need? *"
                outlined
                required
                v-model="text"
                placeholder="ie. I have a headache and I do not have my medicines"
                >
                </v-text-field>
              </v-col>
              <v-col cols="12">
                <v-text-field
                dark
                color="secondary"
                label="Telephone *"
                outlined
                required
                v-model="telephone"
                placeholder="ie. 639874512"
                >
                </v-text-field>
              </v-col>
              <v-col cols="12">
                <v-text-field
                dark
                color="secondary"
                label="Additional Information"
                outlined
                required
                v-model="addInfo"
                placeholder="ie. My doorbell doesn´t work."
                >
                </v-text-field>
              </v-col>
            </v-row>
          </v-container>
          <small class="small" dark>*indicates required field</small><br>
         <div class="buttons">
        <v-btn  class="cancel" color="secondary secondary2--text" to="/home">Cancel</v-btn>
        <v-btn class="create" color="secondary2 secondary--text" @click="save">Create Help</v-btn>
         </div>
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
  color: white;
  bottom: 50px;
  margin-left: 10px;
}
.create{
  margin-left: 30px;
}

.headline-1 {
  margin-left: 10px;
}

.buttons{
text-align: center;
}
</style>
