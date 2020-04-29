<template>
  <v-container class="fill-height" fluid >
    <v-row align="center" justify="center" >
      <v-col cols="12" sm="8" md="6" lg="4">
        <v-card class="elevation-5">
          <v-toolbar color="primary" dark flat >
            <v-toolbar-title>Login</v-toolbar-title>
          </v-toolbar>
          <v-card-text>
            <v-form>
              <v-text-field class="email" label="E-mail" v-model="email" :rules="emailRules" prepend-icon="mdi-email"></v-text-field>

               <v-text-field class="password" label="Password" v-model="userPassword" :type="pwdType" prepend-icon="mdi-lock" :rules="passwordRule" :append-icon="showPassword ? 'mdi-eye' : 'mdi-eye-off'" @click:append="showPassword = !showPassword" ></v-text-field>
            </v-form>
          </v-card-text>
          <v-card-actions>
            <v-spacer />
            <v-btn class='button' color="primary" @click="login">Inicia sesión</v-btn>
          </v-card-actions>
          <h6 class='text2'>Aun no tienes cuenta? <router-link class='lgbtn' to="/signup">Create Una Aquí</router-link></h6>

        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import APIServices from '../services/Api'

export default {
  name: 'login',
  data () {
    return {
      showPassword: false,
      userPassword: '',
      passwordRule: [
        v => !!v || 'Password is required',
        v => v.length >= 6 || 'Password must be more than 6 characters'
      ],
      email: '',
      emailRules: [
        v => !!v || 'E-mail is required',
        v => /.+@.+\..+/.test(v) || 'E-mail must be valid'
      ]
    }
  },
  methods: {
    login () {
      const user = {
        email: this.email,
        password: this.password
      }
      APIServices.login(user)
        .then(response => {
          localStorage.setItem('token', response.token)
          this.$router.push('/home')
        })
        .catch(err => console.log(err))
    }
  },
  computed: {
    pwdType () {
      return this.showPassword ? 'text' : 'password'
    }
  }
}
</script>

<style lang="scss" scoped>

</style>
