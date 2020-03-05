import Vue from 'vue'
import App from './App.vue'

import { MdButton, MdContent, MdTabs, MdDrawer, MdList } from 'vue-material/dist/components'
import 'vue-material/dist/vue-material.min.css'
import 'vue-material/dist/theme/default.css'

Vue.use(MdButton);
Vue.use(MdContent);
Vue.use(MdTabs);
Vue.use(MdDrawer);
Vue.use(MdList);

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
