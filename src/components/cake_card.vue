<script setup lang="ts">
import cakeDialog from "./cake_dialog.vue";
import { Cake } from "../interfaces/schemas";
import { useCartStore } from "../store";

const store = useCartStore();

interface Props {
  cake: Cake;
}

const props = defineProps<Props>();

const { cake } = props;

const addCaketoCart = () => {
  store.addToCart(cake);
};
</script>

<template>
  <v-card
    background-color="#58aad8"
    id="cakeCard"
    max-height="420"
    elevation="10"
    max-width="400"
  >
    <v-img
      class="white--text align-end"
      height="200px"
      :src="cake.cakePhoto"
      cover
    >
      <v-card-title class="text-md-h5">{{ cake.cakeName }}</v-card-title>
    </v-img>

    <v-card-subtitle class="pt-4 text-md-h5">{{ cake.price }}$</v-card-subtitle>

    <v-card-text class="text--primary">
      <div>{{ cake.cakeDescription }}</div>
    </v-card-text>

    <v-card-actions class="ma-2">
      <v-spacer />
      <v-btn color="secondary" @click="addCaketoCart" variant="text">
        Add to cart</v-btn
      >
      <cakeDialog />
    </v-card-actions>
  </v-card>
</template>

<style lang="css">
#cakeCard {
  margin: auto;
  background-color: rgba(99, 93, 157, 0.9);
  border-radius: 16px;
  box-shadow: 23px 34px red;
  color: white;
}
</style>
