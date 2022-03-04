<script setup lang="ts">
import { storeToRefs } from "pinia";
import cakeCard from "../components/cake_card.vue";
import { useSideboarCake, useUserState } from "../store";

const store = useSideboarCake();
const userStore = useUserState();

const { cakes } = storeToRefs(store);
</script>
<template>
  <section class="bg">
    <v-row>
      <v-col v-for="(cake, i) in cakes" :key="i" md="4" cols="12">
        <cakeCard :cake="cake" />
      </v-col>
    </v-row>
  </section>
</template>

<style>
.bg {
  padding: 3rem;
  background-image: url("src/assets/bg.png");
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
}
</style>
