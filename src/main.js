import Vue from "vue";
import App from "./App";
import router from "./router";
import axios from "./backend/vue-axios";

Vue.config.productionTip = false;
new Vue({
  render: h => h(App),
  router,
  axios,
  template: "<App/>",
  components: { App }
}).$mount("#app");
