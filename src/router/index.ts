import { createRouter, createWebHistory, useRoute } from "vue-router";
import Shop from "../pages/shop.vue";
import CartPage from "../pages/cart_page.vue";
import UploadCake from "../pages/upload_cake.vue";
import Payment from "../pages/payment_page.vue";
import Register from "../pages/register_page.vue";
import Login from "../pages/login_page.vue";
import Home from "../pages/home_page.vue";
const routes = [
  {
    path: "/shop",
    component: Shop,
    name: "shop",
    beforeEnter: (_to: any, _from: any, next: (arg0?: string) => void) => {
      if (!localStorage.getItem("token")) {
        next("/login");
      } else {
        next();
      }
    },
  },
  { path: "/cart", component: CartPage, name: "cart" },
  {
    path: "/upload-cake",
    component: UploadCake,
    name: "uploadCake",
    beforeEnter: (_to: any, _from: any, next: (arg0?: string) => void) => {
      if (!localStorage.getItem("token")) {
        next("/login");
      } else {
        next();
      }
    },
  },
  {
    path: "/payment",
    component: Payment,
    name: "payment",
    beforeEnter: (_to: any, _from: any, next: (arg0?: string) => void) => {
      if (!localStorage.getItem("token")) {
        next("/login");
      } else {
        next();
      }
    },
  },
  {
    path: "/register",
    component: Register,
    name: "register",
  },
  {
    path: "/login",
    component: Login,
    name: "login",
    beforeEnter: (_to: any, _from: any, next: (arg0?: string) => void) => {
      if (localStorage.getItem("token")) {
        next("/shop");
      } else {
        next();
      }
    },
  },
  {
    path: "/",
    component: Home,
    name: "home",
  },
];

const history = createWebHistory();

const router = createRouter({
  history,
  routes,
});

export const route = useRoute();

export const goTo = (path: string) => {
  router.push({ path: path });
};

export default router;
