<template>
<div class="color">
    <v-container class="fill-height" fluid >
      <v-row align="center" justify="center" >
        <v-col cols="12" sm="8" md="6" lg="4">
            <h1 class="mt-12 white--text">¡Bienvenido a Aidbee!</h1>
            <br />
            <h2 class="white--text">¿No puedes salir de casa? Pide ayuda a algún voluntario local. ¿Te gustaría ayudar a tus vecinos? Entrega objetos esenciales a vecinos del alredor.</h2>
          </v-col>
        <v-col cols="12" sm="8" md="6" lg="4">
          <v-card class="elevation-3">
            <v-toolbar color="primary" dark flat >
              <v-spacer />
              <v-toolbar-title>Sign Up</v-toolbar-title>
              <v-spacer />
            </v-toolbar>
            <v-card-text>
              <v-form>
              <v-text-field
              label="Name"
              v-model="name"
              prepend-icon="mdi-account-circle"
              :rules="userRules"
              outlined
              color="primary"
            ></v-text-field>

            <v-text-field
              label="Surname"
              v-model="surname"
              prepend-icon="mdi-account-circle"
              :rules="surnameRules"
              outlined
              color="primary"
            ></v-text-field>

            <v-text-field
              label="E-mail"
              v-model="email"
              :rules="emailRules"
              prepend-icon="mdi-email"
              outlined
              color="primary"
            ></v-text-field>

            <v-text-field
              label="Telephone"
              v-model="telephone"
              prepend-icon="mdi-cellphone"
              :rules="telephoneRules"
              outlined
              color="primary"
            ></v-text-field>

            <v-text-field
              label="Password"
              v-model="userPassword"
              :type="showPassword ? 'text' : 'password'"
              prepend-icon="mdi-lock"
              :rules="passwordRule"
              :append-icon="showPassword ? 'mdi-eye' : 'mdi-eye-off'"
              @click:append="showPassword = !showPassword"
              outlined
              color="primary"
            ></v-text-field>
              </v-form>
            </v-card-text>
            <v-card-actions>
              <v-spacer />
              <v-btn class='button' color="primary" @click="signup">Únete</v-btn>
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
  name: 'signup',
  data () {
    return {
      showPassword: false,
      userPassword: '',
      passwordRule: [
        v => !!v || 'Password is required',
        v => v.length >= 6 || 'Password must be more than 6 characters'
      ],
      name: '',
      userRules: [v => !!v || 'Name is required'],
      surname: '',
      surnameRules: [v => !!v || 'Surname is required'],
      email: '',
      emailRules: [
        v => !!v || 'E-mail is required',
        v => /.+@.+\..+/.test(v) || 'E-mail must be valid'
      ],
      telephone: '',
      telephoneRules: [
        v => !!v || 'Telephone is required',
        v => /^[+]*[(]{0,1}[0-9]{1,4}[)]{0,1}[-\s./0-9]*$/.test(v) || 'Telephone must be valid'
      ]
    }
  },
  methods: {
    signup () {
      const newUser = {
        name: this.name,
        email: this.email,
        password: this.userPassword,
        telephone: this.telephone,
        surname: this.surname
      }

      APIServices.signup(newUser)
        .then(response => {
          localStorage.setItem('token', response.token)
          localStorage.setItem('name', response.name)
          this.$router.push('/home')
        })
        .catch(err => console.log(err))
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

.color{
  background: linear-gradient(180deg, #043170 0%, #EDC1BB 100%);
  height: 100vh;
}

.button {
  bottom: 20px;
}

</style>
