<template>
  <div class="color">
    <v-container class="fill-height grid-list-md text-xs-center">
      <v-row align="center" justify="center">
        <v-col cols="12" sm="8" md="6" lg="4">
          <v-card class="elevation-3 mx-auto">
            <v-toolbar color="primary" dark flat >
              <v-spacer />
              <v-toolbar-title class="text-center">Login</v-toolbar-title>
              <v-spacer />
            </v-toolbar>
            <v-card-text>
              <v-form>
                <v-text-field
                class="email"
                label="E-mail"
                v-model="email"
                :rules="emailRules"
                prepend-icon="mdi-email"
                outlined
                color="primary"
                >
                </v-text-field>

                <v-text-field
                class="password"
                label="Password"
                v-model="userPassword"
                :type="pwdType"
                prepend-icon="mdi-lock"
                :rules="passwordRule"
                :append-icon="showPassword ? 'mdi-eye' : 'mdi-eye-off'"
                @click:append="showPassword = !showPassword"
                outlined
                color="primary"
                >
                </v-text-field>

              </v-form>
            </v-card-text>
            <v-card-actions class="card">
              <v-spacer />
              <v-btn
              class="button"
              color="primary"
              @click="login"
              absolute
              bottom
              :style="{left: '50%', transform:'translateX(-50%)'}"
              >
              Inicia sesión</v-btn>
              <v-spacer />
            </v-card-actions>

          </v-card>
        </v-col>
      </v-row>
    </v-container>
  </div>
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
        password: this.userPassword
      }
      APIServices.login(user)
        .then(response => {
          if (response.error) {
            this.userInvalid = true
          } else {
            localStorage.setItem('token', response.token)
            localStorage.setItem('name', response.name)
            localStorage.setItem('img', response.img || '')
            this.$router.push('/maps')
          }
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
.text2 {
  padding-bottom: 2px;
  padding-left: 5px;
  text-align: center;
}

.button {
  bottom: 20px;
}

.card {
  padding: 18px;
}

</style>
