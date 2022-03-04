<script setup lang="ts">
import { ref } from "vue";
import paymentForm from "./payment_form.vue";
import cakeForm from "./cake_form.vue";

const dialog = ref(false);
</script>

<template>
  <div>
    <v-dialog fullscreen v-model="dialog">
      <template v-slot:activator="{ isActive, props }">
        <v-btn
          color="primary"
          rounded="pill"
          variant="outlined"
          v-bind="props"
          v-on="isActive"
          >buy right now</v-btn
        >
      </template>
      <v-card elevation="0">
        <v-card-title class="text-h5 grey lighten-2">
          Enjoy a {CHOCOLATE} cake
          <v-spacer></v-spacer>
          <v-btn
            text-color="red"
            elevation="0"
            icon="mdi-close"
            @click="dialog = !dialog"
          ></v-btn>
        </v-card-title>

        <v-card-text>
          <cakeForm />
          <paymentForm />
        </v-card-text>

        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn class="mb-20" color="primary" text @click="dialog = false">
            Pagar
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </div>
</template>

<style>
#dialog {
  border-radius: 16px;
}
</style>
