<script setup lang="ts">
import { reactive, toRefs } from "vue";
import { Cake } from "../interfaces/schemas";
import { useSideboarCake } from "../store";

const store = useSideboarCake();

const newCake: Cake = reactive({
  cakeName: "",
  cakeDescription: "",
  cakePhoto: "",
  cover: "",
  customMessage: "",
  freeLactose: false,
  messageColor: "#rrggbb",
  price: 0,
});

const {
  cakeDescription,
  cakeName,
  cakePhoto,
  cover,
  customMessage,
  freeLactose,
  messageColor,
  price,
} = toRefs(newCake);

const postNewCake = () => {
  store.postCake(newCake);
};
</script>

<template>
  <v-container fluid fill-height>
    <section elevation="12">
      <v-card-title> add new cake to shop </v-card-title>
      <div>
        <v-row>
          <v-col cols="12" md="6">
            <v-row>
              <v-col cols="12">
                <v-text-field
                  color="primary"
                  prepend-icon="mdi-cake"
                  variant="outlined"
                  type="text"
                  v-model="cakeName"
                  label="cake name"
              /></v-col>
              <v-col cols="6">
                <v-text-field
                  type="text"
                  v-model="cakePhoto"
                  label="cake photo"
                  variant="outlined"
                  color="primary"
                  prepend-icon="mdi-image-multiple"
                ></v-text-field
              ></v-col>
              <v-col cols="6">
                <v-checkbox
                  type="text"
                  v-model="freeLactose"
                  label="free lactose"
                  variant="outlined"
                  color="primary"
                  prepend-icon="mdi-bucket"
                ></v-checkbox
              ></v-col>
            </v-row>
          </v-col>

          <v-col cols="12" md="6">
            <v-textarea
              type="text"
              v-model="cakeDescription"
              label="cake description"
              variant="outlined"
              color="primary"
              prepend-icon="mdi-text"
          /></v-col>
          <v-col cols="12" md="6">
            <v-textarea
              type="text"
              v-model="customMessage"
              label="custom message"
              density="compact"
              variant="outlined"
              color="primary"
              prepend-icon="mdi-text"
          /></v-col>
          <v-col cols="12" md="6">
            <v-row>
              <v-col cols="12">
                <v-text-field
                  type="text"
                  v-model="cover"
                  label="cake cover"
                  density="compact"
                  variant="outlined"
                  color="primary"
                  prepend-icon="mdi-palette-swatch"
              /></v-col>
              <v-col cols="6">
                <v-text-field
                  label="Price"
                  type="number"
                  v-model="price"
                  variant="outlined"
                  density="compact"
                  color="primary"
                  prepend-icon="mdi-currency-usd"
                ></v-text-field>
              </v-col>
              <v-col cols="6">
                <v-text-field
                  type="color"
                  required
                  density="compact"
                  label="Message color"
                  variant="outlined"
                  v-model="messageColor"
                ></v-text-field>
              </v-col>
            </v-row>
          </v-col>
        </v-row>
      </div>
      <v-card-actions>
        <v-spacer></v-spacer>
        <v-btn @click="postNewCake" variant="outlined"> add new cake</v-btn>
      </v-card-actions>
    </section>
  </v-container>
</template>
