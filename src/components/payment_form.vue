<script setup lang="ts"></script>

<template>
  <section class="pa-5 bg-form">
    <h4>Payment</h4>
    <v-divider class="ma-1"></v-divider>
    <v-row>
      <v-col cols="12" md="3">
        <v-text-field
          prepend-icon="mdi-email"
          suffix="@"
          label="email"
          class="input"
          color="primary"
          clearable
          variant="outlined"
          density="comfortable"
          type="email"
          required
      /></v-col>

      <v-col cols="12" md="3">
        <v-text-field
          prepend-icon="mdi-earth"
          suffix="Country"
          label="Country"
          clearable
          class="input"
          color="primary"
          variant="outlined"
          density="comfortable"
          type="text"
          required
      /></v-col>

      <v-col cols="12" md="3">
        <v-text-field
          prepend-icon="mdi-city"
          suffix="City"
          label="city"
          variant="outlined"
          class="input"
          color="primary"
          clearable
          density="comfortable"
          type="text"
          required
        />
      </v-col>

      <v-col cols="12" md="3">
        <v-text-field
          prepend-icon="mdi-phone"
          label="Phone number"
          variant="outlined"
          color="primary"
          clearable
          density="comfortable"
          type="number"
          required
        />
      </v-col>
      <v-col cols="12" md="4">
        <v-text-field
          prepend-icon="mdi-credit-card"
          suffix="credit card"
          label="credit card number"
          color="primary"
          variant="outlined"
          clearable
          density="comfortable"
          type="number"
          maxlength="16"
          required
      /></v-col>
      <v-col cols="6" md="4">
        <v-text-field
          prepend-icon="mdi-numeric"
          suffix="cvv"
          label="cvv"
          color="primary"
          variant="outlined"
          clearable
          density="comfortable"
          type="number"
          maxlength="3"
          required
        />
      </v-col>
      <v-col cols="6" md="4">
        <v-text-field
          variant="outlined"
          label="expiration date"
          color="primary"
          clearable
          density="comfortable"
          type="date"
          required
        />
      </v-col>
    </v-row>
  </section>
</template>

<style>
.bg-form {
  background-color: #f4deca;
  border: solid 1px black;
  box-shadow: 15px 15px black;
  border-radius: 15px;
}
</style>
