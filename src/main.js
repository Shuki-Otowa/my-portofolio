import Vue from "vue";
import App from "./App.vue";
import router from "./plugins/Router";
import vuetify from "./plugins/vuetify";
import VueTyperPlugin from "vue-typer";
import VAnimateCss from "animate.css";

Vue.config.productionTip = false;
Vue.use(VueTyperPlugin);
Vue.use(VAnimateCss);

new Vue({
  router,
  vuetify,
  render: (h) => h(App),
}).$mount("#app");
