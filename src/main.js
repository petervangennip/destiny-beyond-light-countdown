import Vue from "vue";
import App from "./App.vue";
import store from "./store";

Vue.config.productionTip = false;

// styling
import "@/css/imports.scss";

new Vue({
  store,
  render: h => h(App)
}).$mount("#app");
