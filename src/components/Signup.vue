<template>
  <div class='background'>
    <v-card width="400px" class="ml-5 mt-5 mx-a">
        <v-form class='text'>
          <v-text-field
            label="Name"
            v-model="name"
            prepend-icon="mdi-account-circle"
            :rules="userRules"
          ></v-text-field>

          <v-text-field
            label="Surname"
            v-model="surname"
            prepend-icon="mdi-account-circle"
            :rules="surnameRules"
          ></v-text-field>

          <v-text-field
            label="E-mail"
            v-model="email"
            :rules="emailRules"
            prepend-icon="mdi-email"
          ></v-text-field>

          <v-text-field
            label="Telephone"
            v-model="telephone"
            prepend-icon="mdi-cellphone"
            :rules="telephoneRules"
          ></v-text-field>

          <v-text-field
            class="red white--text"
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
        <v-btn class='button' color="#043170" @click="signup">Únete</v-btn>
      </v-card-actions>
      <h6 class='text2'>Ya tienes una cuenta?</h6>
      <router-link class='lgbtn' to="/login">Inicia Sesión Aquí</router-link>
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
        v => v.length >= 9 || 'Telephone must be more than 9 characters'
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
  height:458px;
  left:29px;
  top: 79px;
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
