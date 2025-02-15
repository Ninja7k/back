import Vue from "vue";
import App from "./App.vue";
import "./registerServiceWorker";
import router from "./router";
import store from "./store";
import vuetify from "./plugins/vuetify";
import "@/assets/scss/main.scss";
import { LoadingPlugin } from "vuetify-loading-overlay";
import i18n from './i18n'

Vue.use(LoadingPlugin);
Vue.config.productionTip = false;

new Vue({
  router,
  store,
  vuetify,
  i18n,
  render: (h) => h(App),
}).$mount("#app");
