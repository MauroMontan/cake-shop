<script setup lang="ts">
import { ref } from "vue";

const items = ref(["Chocolate", "Vanilla", "jelly"]);
</script>

<template>
  <h4>Cake customization</h4>
  <v-divider class="ma-4"></v-divider>
  <v-row>
    <v-col cols="12" md="3">
      <v-row dense>
        <v-col cols="12">
          <v-select dense :items="items" label="Cover flavor"></v-select>
        </v-col>
        <v-col cols="12">
          <v-text-field label="Message color" type="color" />
        </v-col>
      </v-row>
    </v-col>

    <v-col cols="12" md="4">
      <v-textarea label="Add a custom message to your cake" max-rows="5" />
    </v-col>

    <v-col cols="12" md="5">
      <div>
        <v-img
          class="white--text align-end"
          height="200px"
          src="https://i.pinimg.com/originals/e7/fb/9e/e7fb9ef67e7b6fd85e85d5b740ffc98f.jpg"
          cover
        >
          <v-card-title class="text-md-h5">300$</v-card-title>

          <v-checkbox label="free lactose"></v-checkbox>
        </v-img>
      </div>
    </v-col>
  </v-row>
</template>

<style>
div {
  border-radius: 16px;
}
</style>
