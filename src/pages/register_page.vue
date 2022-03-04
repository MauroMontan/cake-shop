<script setup lang="ts">
import { reactive, ref } from "vue";
import { User } from "../interfaces/schemas";
import { useUserState } from "../store";

const store = useUserState();
const confirmedPassword = ref("");
const loading = ref(false);
const user: User = reactive({
  email: "",
  password: "",
});

const register = (): void => {
  if (user.password === confirmedPassword.value) {
    store.register(user);
    console.log(user);
    loading.value = true;
  }
};
</script>

<template>
  <v-container class="container" fluid fill-height>
    <v-spacer></v-spacer>
    <v-row dense>
      <v-col></v-col>
      <v-col>
        <section class="card">
          <h2>Register!</h2>
          <v-divider></v-divider>

          <v-text-field
            type="email"
            v-model="user.email"
            clearable
            label="email"
            variant="outlined"
          ></v-text-field>
          <v-text-field
            type="password"
            v-model="user.password"
            clearable
            label="password"
            variant="outlined"
          ></v-text-field>

          <v-text-field
            type="password"
            v-model="confirmedPassword"
            clearable
            label="confirm your password"
            variant="outlined"
          ></v-text-field>

          <v-spacer></v-spacer>
          <button @click="register" class="btn">
            <i v-if="loading" class="fa fa-circle-o-notch fa-spin"></i> Register
          </button>
          <v-spacer></v-spacer>
        </section>
      </v-col>
      <v-col></v-col>
    </v-row>
  </v-container>
</template>

<style>
.container {
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-rendering: optimizeLegibility;
  background-image: url("src/assets/bg.png");
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  height: 90vh;
}
.card {
  margin-top: 1rem;
  background-color: rgba(240, 223, 200, 0.8);
  border: solid 1px;
  padding: 2rem;
  box-shadow: 5px 10px;
  text-align: center;
  border-radius: 15px;
  height: 400px;
  min-width: 400px;
}
.btn {
  padding: 4px;
  width: 100px;
  border: solid 1px black;
  border-radius: 5px;
}
</style>
