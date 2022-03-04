import { defineStore } from "pinia";
import { stringifyQuery } from "vue-router";
import { Cake, User } from "../interfaces/schemas";
import { goTo } from "../router";

export const useCartStore = defineStore("cake-cart", {
  state: () => ({
    cart: [] as Array<Cake>,
  }),
  getters: {
    cartLenght(store) {
      return store.cart.length.toString();
    },
  },

  actions: {
    addToCart(cake: Cake) {
      this.cart.push(cake);
    },

    removeFromCart(cakeIndex: number) {
      let newCart = this.cart.filter((c, index) => index !== cakeIndex);

      this.cart = [...newCart];
    },
  },
});

export const useSideboarCake = defineStore("sideboardCake", {
  state: () => ({
    endpoint: "https://cakeshp.deta.dev",
    cakes: [] as Array<Cake>,
  }),
  getters: {},

  actions: {
    async getCakeList(): Promise<void> {
      const response = await fetch(`${this.endpoint}/cakes`);
      const json: Array<Cake> = await response.json();
      this.cakes = [...json];
    },

    async postCake(payload: Cake): Promise<void> {
      const request = await fetch(`${this.endpoint}/cakes/add-cake`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
        body: JSON.stringify(payload),
      });

      const response = await request.json();
      console.log(response);
    },
  },
});

export const useUserState = defineStore("userState", {
  state: () => ({
    endpoint: "https://cakeshp.deta.dev",
    isLoggedIn: false,
    accesToken: null,
  }),
  getters: {},

  actions: {
    async register(payload: User): Promise<void> {
      const request = await fetch(`${this.endpoint}/users/signup`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(payload),
      });

      if (request.status === 200) {
        goTo("/login");
      }
    },

    async login(payload: User): Promise<void> {
      console.log(payload);

      const request = await fetch(`${this.endpoint}/login/`, {
        method: "POST",
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
        },
        body: `username=${payload.email}&password=${payload.password}`,
      });

      const response = await request.json();

      if (request.status === 200) {
        this.isLoggedIn = true;
        goTo("/shop");
        localStorage.setItem("token", response);
        this.accesToken = response.user;
      }
    },
  },
});
