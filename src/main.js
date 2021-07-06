import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import 'element-ui/lib/theme-chalk/index.css';
import {ElementComponentPlugin} from "@/plugins/element-components";
import {
  Button
} from "element-ui";



Vue.config.productionTip = false;
//全局配置
Vue.prototype.$ELEMENT = { size: 'small', zIndex: 3000 };

Vue.use(ElementComponentPlugin,[
  Button
])

// Vue.use(Loading.directive);
// Vue.prototype.$loading = Loading.service;
// Vue.prototype.$msgbox = MessageBox;
// Vue.prototype.$alert = MessageBox.alert;
// Vue.prototype.$confirm = MessageBox.confirm;
// Vue.prototype.$prompt = MessageBox.prompt;
// Vue.prototype.$notify = Notification;
// Vue.prototype.$message = Message;


new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount("#app");
