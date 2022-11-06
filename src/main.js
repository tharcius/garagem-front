import { createApp } from "vue";
import { createPinia } from "pinia";

import App from "./App.vue";
import router from "./router";
import axios from "axios";
import { URL_API } from "./configs/api";

import "./assets/main.css";

const app = createApp(App);

axios.defaults.baseURL = URL_API;
app.use(createPinia());
app.use(router);

app.mount("#app");
