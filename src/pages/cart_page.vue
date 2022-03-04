<script setup lang="ts">
import { useCartStore } from "../store";
import { goTo } from "../router/index";
import { storeToRefs } from "pinia";

const store = useCartStore();

const { cart } = storeToRefs(store);

const removeCake = (cake: number): void => {
  console.log(cake);
  store.removeFromCart(cake);
};
</script>

<template>
  <section class="bg-cart">
    <v-card-title class="text-h5 lighten-2">
      <v-btn
        size="large"
        variant="outlined"
        @click="goTo('/shop')"
        icon="mdi-keyboard-return"
      ></v-btn>
      <v-spacer></v-spacer>
      Enjoy and share !
      <v-spacer></v-spacer>
      <v-btn
        @click="goTo('/payment')"
        class="mb-20"
        variant="contained-flat"
        color="primary"
      >
        <v-icon>mdi-wallet</v-icon> pay all
      </v-btn>
    </v-card-title>

    <div scrollable overflow height="100">
      <v-list-item
        color="black"
        elevation="4"
        v-for="(cake, i) in cart"
        class="list-item"
        :key="i"
        two-line
      >
        <div>
          <v-img
            height="100"
            width="100"
            lazy-src="../src/assets/chocolate.jpg"
            :src="cake.cakePhoto"
            cover
          >
          </v-img>
        </div>

        <v-list-item-content class="mx-5">
          <v-list-item-title class="text-md-h5">{{
            cake.cakeName
          }}</v-list-item-title>

          <v-list-item-subtitle class="subtitle">
            <div>{{ cake.cakeDescription }}</div>
            <v-spacer></v-spacer>
          </v-list-item-subtitle>
        </v-list-item-content>
        <v-spacer></v-spacer>
        <div>
          <h2 class="mx-6">{{ cake.price }}$</h2>
          <v-spacer></v-spacer>
        </div>
        <v-btn
          variant="outlined"
          size="small"
          color="warning"
          @click="removeCake(i)"
          icon="mdi-close"
        ></v-btn>
      </v-list-item>
    </div>
  </section>
</template>

<style>
.bg-cart {
  background-color: #f4deca;
  padding: 10px;
}
#dialog {
  border-radius: 16px;
}

.list-item {
  border-radius: 8px;
  margin: 16px;
  padding: 20px;
}

.subtitle {
  margin: 6px;
}
</style>
