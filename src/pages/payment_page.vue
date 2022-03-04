<script setup lang="ts">
import { storeToRefs } from "pinia";
import paymentForm from "../components/payment_form.vue";
import { useCartStore } from "../store";

const store = useCartStore();

const { cart } = storeToRefs(store);
</script>

<template>
  <section class="bg pa-6">
    <v-row>
      <v-col cols="12" md="5">
        <section class="cake-list">
          <v-list-item
            color="black"
            elevation="1"
            v-for="(cake, i) in cart"
            class="list-item"
            :key="i"
            two-line
          >
            <v-list-item-content>
              <v-list-item-title class="text-md-h5">{{
                cake.cakeName
              }}</v-list-item-title>
            </v-list-item-content>

            <v-spacer></v-spacer>
            <h2 class="mx-6">{{ cake.price }}$</h2>
          </v-list-item>
        </section>
      </v-col>

      <v-col cols="12" md="7">
        <paymentForm />
      </v-col>
    </v-row>

    <v-card-actions>
      <v-spacer></v-spacer>
      <v-btn
        style="width: 200px; height: 35px; margin: 0"
        variant="contained-flat"
        color="primary"
      >
        pay</v-btn
      >
    </v-card-actions>
  </section>
</template>

<style>
::-webkit-scrollbar {
  display: none;
}

.cake-list {
  margin: 0;
  background-color: #f4deca;
  border: solid 1px black;
  height: 75vh;
  border-radius: 15px;
  box-shadow: 5px 5px;
  overflow: scroll;
}
</style>
