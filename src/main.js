import Vue from "vue";
import { BootstrapVue, IconsPlugin } from "bootstrap-vue";

Vue.use(BootstrapVue);
Vue.use(IconsPlugin);
import "./assets/custom.scss";

import { library } from "@fortawesome/fontawesome-svg-core";
import { faUserSecret } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";

library.add(faUserSecret);
Vue.component("font-awesome-icon", FontAwesomeIcon);
Vue.config.productionTip = false;

import VueTypedJs from "vue-typed-js";
Vue.use(VueTypedJs);

import VueAnalytics from "vue-analytics";
if (process.env.VUE_APP_GA_ID) {
  Vue.use(VueAnalytics, {
    id: process.env.VUE_APP_GA_ID,
  });
}

import VueGtag from "vue-gtag";
if (process.env.VUE_APP_GTAG_ID) {
  Vue.use(VueGtag, {
    config: { id: process.env.VUE_APP_GTAG_ID },
  });
}

import App from "./App.vue";

new Vue({
  render: (h) => h(App),
}).$mount("#app");
