<template>
  <v-container class="fill-height" fluid>
    <v-row align="center" justify="center">
      <v-col cols="12" sm="8" md="4">
        <v-card class="elevation-12">
          <v-toolbar color="primary" dark flat>
            <v-toolbar-title>Login To System</v-toolbar-title>
          </v-toolbar>
          <v-card-text>
            <v-form>
              <v-text-field
                v-model="email"
                label="email"
                name="email"
                prepend-icon="mdi-account"
                type="text"
              ></v-text-field>

              <v-text-field
                v-model="password"
                id="password"
                label="Password"
                name="password"
                prepend-icon="mdi-lock"
                type="password"
              ></v-text-field>
            </v-form>
          </v-card-text>
          <v-card-actions>
            <v-spacer></v-spacer>
            <v-btn color="primary" @click="login">Login</v-btn>
          </v-card-actions>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import { mapGetters, mapActions } from "vuex";
import axios from "axios";

export default {
  name: "Login",
  data() {
    return {
      email: null,
      password: null
    };
  },
  methods: {
    ...mapActions(["AUTH_RESPONSE"]),
    ...mapGetters(["getBaseURL"]),
    login: function(){
      return new Promise(() => {
        axios
          .post(this.$store.state.BASE_URL + "/login", {
            email: this.email,
            password: this.password
          })
          .then((response) => {
            const vm = this;
            vm.$store.dispatch("AUTH_RESPONSE", response.data.token).then(() => {
              this.$router.push('/');
              // console.log("SAMPE LOGIN : "+response.status);
            });
          })
          .catch(err => {
            console.log("ERROR WAS HAPPEN : " + err);
          });
      });
    }
  }
};
</script>