import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";

import ElementUi from "element-ui";

import "element-ui/lib/theme-chalk/index.css";

import lang from "element-ui/lib/locale/lang/ru-RU";
import locale from "element-ui/lib/locale";
locale.use(lang);

Vue.config.productionTip = false;

Vue.use(ElementUi);

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
