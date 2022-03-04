<script setup lang="ts">
import { goTo } from "../router/index";
</script>

<template>
  <section class="home-bg">
    <v-row>
      <v-col cols="12"></v-col>
      <v-col cols="6"></v-col>
      <v-col cols="12" md="6">
        <v-row>
          <v-col cols="12">
            <v-card style="border-radius: 15px" class="mx-16 my-8">
              <v-card-title>come whenever you want again</v-card-title>
              <v-card-text>
                We are happy to see you again !,new recipes have been added
                since the last time you logged in. we think it's time for you to
                take a break and try something new!
              </v-card-text>
              <v-card-actions>
                <v-spacer></v-spacer>
                <v-btn @click="goTo('/login')" variant="outlined"
                  >Enter shop</v-btn
                >
              </v-card-actions>
            </v-card></v-col
          >

          <v-col cols="12">
            <v-card style="border-radius: 15px" class="ma-16">
              <v-card-title
                >You do not know about us? try us to know !</v-card-title
              >
              <v-card-text>
                nothing is better than giving a sensation, giving flavors!
              </v-card-text>
              <v-card-actions>
                <v-spacer></v-spacer>
                <v-btn
                  @click="goTo('/register')"
                  color="primary"
                  variant="outlined"
                  >Register</v-btn
                >
              </v-card-actions>
            </v-card>
          </v-col>
        </v-row>
      </v-col></v-row
    >
  </section>
</template>

<style>
.home-bg {
  background-image: url("../assets/bghome.png");
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
  height: 100vh;
}
</style>
