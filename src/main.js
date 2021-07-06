import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import 'element-ui/lib/theme-chalk/index.css';
import "@/style/index.scss";


//transition
// fade/zoom 等
import 'element-ui/lib/theme-chalk/base.css';
// collapse 展开折叠
import CollapseTransition from 'element-ui/lib/transitions/collapse-transition';

//plugin
import {ElementComponentPlugin} from "@/plugins/element-components";

//component
import {
  Button,Row,Col,Menu,MenuItem
} from "element-ui";

//config
Vue.config.productionTip = false;
//全局配置
Vue.prototype.$ELEMENT = { size: 'small', zIndex: 3000 };

Vue.use(ElementComponentPlugin,[
  CollapseTransition,
  Button,Row,Col,Menu,MenuItem
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
