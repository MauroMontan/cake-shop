import { createApp } from "vue";
import "vuetify/styles";
import { createVuetify } from "vuetify";
import "material-design-icons-iconfont/dist/material-design-icons.css";
import "@mdi/font/css/materialdesignicons.css";
import App from "./App.vue";
import * as components from "vuetify/components";
import * as directives from "vuetify/directives";
import { createPinia } from "pinia";
import router from "./router/index";

const vuetify = createVuetify({
  components,
  directives,
});

createApp(App).use(createPinia()).use(vuetify).use(router).mount("#app");
