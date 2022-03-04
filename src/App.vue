<script setup lang="ts">
import { onMounted } from "vue";
import appBar from "./components/navbar.vue";
import { useSideboarCake } from "./store";

const store = useSideboarCake();

onMounted(() => {
  store.getCakeList();
});
</script>

<template>
  <v-app id="inspire">
    <appBar />
    <v-main>
      <router-view />
    </v-main>
  </v-app>
</template>

<style></style>
