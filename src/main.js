import Vue from "vue";
import App from "./App.vue";
import router from "./Router";

Vue.config.productionTjip = false;

new Vue({
  el: "#app",
  router,
  render: (h) => h(App)
});
