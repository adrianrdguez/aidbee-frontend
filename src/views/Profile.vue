<template>
  <v-container class="justify-center">
    <v-row justify="center">
      <v-col cols="12" sm="8" md="6" lg="4">
      <v-avatar color="indigo">
        <v-icon dark>mdi-account-circle</v-icon>
      </v-avatar>
        <v-col>
          <h2 class="headline-1 secondary--text">Update your profile</h2>
        </v-col>
        <v-col>
          <v-text-field
            v-model="name"
            label="Your Name"
            outlined
            required
            color="secondary"
            dark
          ></v-text-field>
        </v-col>
        <v-col>
          <v-text-field
            dark
            color="secondary"
            label="Your Surname"
            outlined
            required
            v-model="surname"
          ></v-text-field>
        </v-col>
        <v-col>
          <v-text-field
            dark
            color="secondary"
            label="Your Address"
            outlined
            required
            v-model="email"
          ></v-text-field>
        </v-col>
        <v-col>
          <v-text-field
            dark
            color="secondary"
            label="Your Telephone"
            outlined
            required
            v-model="telephone"
          ></v-text-field>
        </v-col>
        <br />
        <div class="button">
          <v-btn  color="secondary secondary2--text" to="/home">Cancel</v-btn>
          <v-btn class="edit" color="secondary2 white--text" @click="edit">Edit Help</v-btn>
        </div>
        </v-col>
    </v-row>
  </v-container>
</template>

<script>

import APIServices from '../services/Api'

export default {
  data () {
    return {
      name: '',
      surname: '',
      email: '',
      telephone: ''
    }
  },
  methods: {
    edit () {
      const upProfile = {
        name: this.name,
        surname: this.surname,
        email: this.email,
        telephone: this.telephone,
      }
      APIServices.updateMyProfile(this.$route.params.id, upProfile)
        .then(() => {
          this.$router.push('/home')
        })
        .catch(err => console.log(err))
    }
  },
  mounted () {
    APIServices.getMyProfile(this.$route.params.id)
      .then(user => {
        this.name = user.name
        this.surname = user.surname
        this.email = user.email
        this.telephone = user.telephone
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
