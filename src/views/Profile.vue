<template>
  <v-container class="justify-center">
    <v-row justify="center">
      <v-col cols="12" sm="8" md="6" lg="4">
        <v-col>
          <h2 class="headline-1 secondary--text text">Update your profile</h2>
        </v-col>
          <img v-if="imgProfile" :src="imgProfile" class="img-profile" alt="">
          <v-avatar v-else class="avatar-profile" color="secondary" al size="50">
            <span class="white--text">{{name[0].toUpperCase()}}</span>
          </v-avatar>
          <input v-if="editMode" type="file" class="input-file" @change="onFileSelected">
        <v-col>
          <v-text-field
            v-model="name"
            label="Your Name"
            outlined
            required
            :disabled="!editMode"
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
            :disabled="!editMode"
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
            :disabled="!editMode"
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
            :disabled="!editMode"
            v-model="telephone"
          ></v-text-field>
        </v-col>
        <br />
        <span class="update-text subtitle-2">
          *If you want to update any information, you will need login in again
        </span>
        <div class="button">
          <v-btn v-if="editMode" color="secondary secondary2--text" @click="cancelUpdateProfile">Cancel</v-btn>
          <v-btn v-if="!editMode" class="edit" color="secondary2 white--text" @click="changeMode">Edit Profile</v-btn>
          <v-btn v-if="editMode" class="edit" color="secondary2 white--text" @click="edit">Save Profile</v-btn>
        </div>
        </v-col>
    </v-row>
  </v-container>
</template>

<script>

import APIServices from '../services/Api'
import firebase from 'firebase'

export default {
  data () {
    return {
      editMode: false,
      name: '',
      backupName: '',
      surname: '',
      backupSurname: '',
      email: '',
      backupEmail: '',
      telephone: '',
      backupTelephone: '',
      imgProfile: '@/assets/img-default-profile.png',
      selectedFile: ''
    }
  },
  methods: {
    onFileSelected (event) {
      this.selectedFile = event.target.files[0]
    },
    uploadImage () {
      return new Promise(resolve => {
        var storageRef = firebase.storage().ref()
        var metadata = {
          contentType: 'image/jpeg'
        }
        var uploadTask = storageRef
          .child('images/' + this.selectedFile.name)
          .put(this.selectedFile, metadata)

        uploadTask.on(
          firebase.storage.TaskEvent.STATE_CHANGED,
          () => {},
          error => console.log(error),
          async function () {
            const downloadURL = await uploadTask.snapshot.ref.getDownloadURL()
            resolve(downloadURL)
          }
        )
      })
    },
    cancelUpdateProfile () {
      this.editMode = !this.editMode
      this.name = this.backupName
      this.surname = this.backupSurname
      this.email = this.backupEmail
      this.telephone = this.backupTelephone
      this.selectedFile = ''
    },
    changeMode () {
      this.editMode = !this.editMode
    },
    async edit () {
      const upProfile = {
        name: this.name,
        surname: this.surname,
        email: this.email,
        telephone: this.telephone
      }

      if (this.selectedFile.length !== 0) {
        const imgURL = await this.uploadImage()
        upProfile.image_url = imgURL
      } else {
        upProfile.image_url = this.imgProfile
      }

      APIServices.updateMyProfile(upProfile)
        .then(user => {
          localStorage.clear()
          this.$router.push('/login')
        })
        .catch(err => console.log(err))
    }
  },
  mounted () {
    APIServices.getMyProfile(this.$route.params.id)
      .then(user => {
        console.log(user)
        this.name = user.name
        this.backupName = user.name
        this.surname = user.surname
        this.backupSurname = user.surname
        this.email = user.email
        this.backupEmail = user.email
        this.telephone = user.telephone
        this.backupTelephone = user.telephone
        this.imgProfile = user.image_url
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
.small{
  left: 90px;
}
.img-profile{
  width: 100px;
  height: 100px;
  margin-left: 40%;
  border-radius: 50px;
}
.avatar-profile{
  margin-left: 45%;
}
.text{
  text-align: center;
}
.input-file{
  margin-top: 15px;
  margin-bottom: 10px;
  margin-left: 25%;
}
.update-text{
  text-align: center;
  justify-content: center;
  align-content: center;
  color: white;
}
.headline-1 {
  margin-top: 20px;
}
</style>
