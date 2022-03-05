<script setup lang="ts">
import { storeToRefs } from "pinia";
import { useCartStore, useUserState } from "../store";
import { goTo } from "../router/index";
const store = useCartStore();
const { cartLenght } = storeToRefs(store);
const userStore = useUserState();

const logOut = () => {
  localStorage.removeItem("token");
  userStore.isLoggedIn = false;
  goTo("/");
};
</script>

<template>
  <v-app-bar
    v-if="
      $route.path !== '/login' &&
      $route.path !== '/' &&
      $route.path !== '/register'
    "
    color="#f0dfc8"
    elevation="1"
    app
  >
    <v-img
      src="https://i.imgur.com/MTirCXY.png"
      max-height="120"
      max-width="120"
      contain
    ></v-img>
    <template v-slot:append>
      <v-badge
        v-if="cartLenght !== '0'"
        :content="cartLenght"
        :value="cartLenght"
        color="#8cf1cb"
        overlap
      >
        <v-btn @click="goTo('/cart')" icon="mdi-cart" />
      </v-badge>
      <v-btn color="#f0dfc8" v-if="cartLenght === '0'" icon="mdi-cart" />
      <v-btn @click="logOut" color="#f0dfc8" class="mx-5" icon="mdi-logout">
      </v-btn>
    </template>
  </v-app-bar>
</template>

<style></style>
