import Vue from "vue";
import vuetify from "./vuetify";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import "./registerServiceWorker";


new Vue({
  vuetify,
  router,
  store,
  render: (h) => h(App),
}).$mount("#app");
