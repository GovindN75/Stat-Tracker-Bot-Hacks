import Vue from "vue";
import App from "./App.vue";
import "bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import BootstrapVue from "bootstrap-vue/dist/bootstrap-vue.esm";
import router from "./router";
import VueToasted from "vue-toasted";

Vue.use(BootstrapVue);
Vue.config.productionTip = false;

Vue.use(VueToasted);

new Vue({
  router,
  render: (h) => h(App),
}).$mount("#app");
