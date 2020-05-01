<template>
  <v-row justify="center">
    <v-dialog v-model="dialog" persistent max-width="590px">
      <template v-slot:activator="{ on }">
        <v-btn class="secondary2--text" v-on="on">Modify Help</v-btn>
      </template>
      <v-card>
        <v-card-title>
          <span class="headline">Modify your help</span>
        </v-card-title>
        <v-card-text>
          <v-container>
            <v-row>
                <v-col cols="12" sm="6">
                <v-select
                  v-model="help_type"
                  :items="['health', 'food', 'other']"
                  label="Type of help*"
                  required
                ></v-select>
              </v-col>
              <v-col cols="12">
                <v-text-field label="Help Title*" required v-model="request_title"></v-text-field>
              </v-col>
              <v-col cols="12">
                <v-text-field label="Address*" required v-model="address"></v-text-field>
              </v-col>
              <v-col cols="12">
                <v-text-field label="What do you need?*" required v-model="text"></v-text-field>
              </v-col>
              <v-col cols="12">
                <v-text-field label="Telephone*" required v-model="telephone"></v-text-field>
              </v-col>
              <v-col cols="12">
                <v-text-field label="Additional Information" required v-model="addInfo"></v-text-field>
              </v-col>
            </v-row>
          </v-container>
          <small>*indicates required field</small>
        </v-card-text>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn color="blue darken-1" text @click="dialog = false">Cancel</v-btn>
          <v-btn color="blue darken-1" text @click="save">Modify</v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </v-row>
</template>
