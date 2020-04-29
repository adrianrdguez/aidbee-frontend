<template>
  <div class='background'>
    <v-card width="400px" class="ml-5 mt-5 mx-a">
        <v-form class='text'>

          <v-text-field
            class="email"
            label="E-mail"
            v-model="email"
            :rules="emailRules"
            prepend-icon="mdi-email"
          ></v-text-field>

          <v-text-field
            class="password"
            label="Password"
            v-model="userPassword"
            :type="showPassword ? 'text' : 'password'"
            prepend-icon="mdi-lock"
            :rules="passwordRule"
            :append-icon="showPassword ? 'mdi-eye' : 'mdi-eye-off'"
            @click:append="showPassword = !showPassword"
          ></v-text-field>
        </v-form>
      <v-divider></v-divider>
    </v-card>
      <v-card-actions>
        <v-btn class='button' color="#043170" @click="login">Inicia sesión</v-btn>
      </v-card-actions>
      <h6 class='text2'>Aun no tienes cuenta?</h6>
      <router-link class='lgbtn' to="/signup">Create Una Aquí</router-link>
  </div>
</template>

<script>
import APIServices from '../services/Api'

export default {
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
  }
}
</script>

<style lang='scss' scoped>

.background {
  position: relative;
  width: 375px;
  height: 667px;
  background: linear-gradient(180deg, #043170 0%, #EDC1BB 100%);
}

.text {
  position: absolute;
  width: 321px;
  height:196px;
  left:27px;
  top: 208px;
  font-family: Roboto;
  font-style: normal;
  font-weight: normal;
  font-size: 12px;
  line-height: 16px;
  letter-spacing: 0.4px;
  color: #FFFFFF !important;
}

.button {
  position: absolute;
  left: 14.13%;
  right: 13.87%;
  top: 89.21%;
  bottom: 5.55%;
  border-radius: 3.05px;
  font-family: Roboto;
  font-style: normal;
  font-weight: bold;
  font-size: 17.0638px;
  line-height: 20px;
  text-align: center;
  color: #EDC1BB;
  width: 270px;
  height: 35px;
}

.lgbtn {
  position: absolute;
  left: 50%;
  right: 24%;
  top: 95.2%;
  bottom: 2.7%;
  font-family: Roboto;
  font-style: normal;
  font-weight: normal;
  font-size: 12.06px;
  line-height: 14px;
  text-align: center;
  color: #FFFFFF;
}

.text2 {
  position: absolute;
  left: 0.1%;
  right: 33%;
  top: 95.2%;
  bottom: 2.7%;
  font-family: Roboto;
  font-style: normal;
  font-weight: normal;
  font-size: 12.06px;
  line-height: 14px;
  text-align: center;
  color: #FFFFFF;
}
</style>
