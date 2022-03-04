<script setup lang="ts">
import { reactive, ref } from "vue";
import { User } from "../interfaces/schemas";
import { useUserState } from "../store";

const store = useUserState();
const loading = ref(false);
const user: User = reactive({
  email: "",
  password: "",
});

const login = (): void => {
  console.log(user);
  store.login(user);
  loading.value = true;
};
</script>

<template>
  <v-container class="container" fluid fill-height>
    <v-spacer></v-spacer>

    <v-row dense>
      <v-col></v-col>
      <v-col>
        <section class="card">
          <h2 class="mb-12">Login</h2>
          <v-divider></v-divider>

          <v-text-field
            type="email"
            color="primary"
            clearable
            label="e-mail"
            v-model="user.email"
            variant="outlined"
          ></v-text-field>

          <v-text-field
            type="password"
            color="primary"
            v-model="user.password"
            clearable
            label="password"
            variant="outlined"
          ></v-text-field>

          <v-spacer></v-spacer>
          <button @click="login" class="btn">
            <i v-if="loading" class="fa fa-circle-o-notch fa-spin"></i> Login
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
  background-image: url("src/assets/bg.png");
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  height: 100vh;
}
.card {
  margin-top: 7rem;
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
