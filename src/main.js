import Vue from "vue";
import App from "./App.vue";
import VueResource from "vue-resource";
import VueScrollReveal from "vue-scroll-reveal";

import { MdButton, MdContent, MdTabs, MdDrawer, MdList, MdCard } from "vue-material/dist/components";
import "vue-material/dist/vue-material.min.css";
import "vue-material/dist/theme/default.css";

Vue.use(MdButton);
Vue.use(MdContent);
Vue.use(MdTabs);
Vue.use(MdDrawer);
Vue.use(MdList);
Vue.use(MdCard);
Vue.use(VueScrollReveal, {
	duration: 800,
	scale: 1,
	distance: "50px",
});

Vue.use(VueResource);
Vue.http.options.root = "https://dominoo-f29d7.firebaseio.com/";

Vue.config.productionTip = false;

new Vue({
	render: (h) => h(App),
}).$mount("#app");
