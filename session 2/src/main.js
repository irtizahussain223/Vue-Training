import { createApp } from "vue";
import filters from "./helpers/filters";
import App from "./App.vue";

const app = createApp(App);
app.config.globalProperties.$filters = filters;

app.directive("hover", (el) => {
  el.style.cursor = "pointer";
});

app.mount("#app");
