import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import 'element-ui/lib/theme-chalk/index.css';
import "@/style/index.scss";
require("./libs/Mock/Mock");
import axios from "axios";

//transition
// fade/zoom 等
import 'element-ui/lib/theme-chalk/base.css';
// collapse 展开折叠
import CollapseTransition from 'element-ui/lib/transitions/collapse-transition';

//plugin
import {ElComponentPlugin} from "@/plugins/element-components";

//component
import {
  Button, Row, Col, Menu, MenuItem, Card, Pagination
} from "element-ui";
import Container from "@/components/Layout/Container";
import LinkToPage from "@/components/LinkToPage";
import Framework from "@/components/Layout/Framework";

//config
Vue.config.productionTip = false;
//全局配置
Vue.prototype.$ELEMENT = { size: 'small', zIndex: 3000 };
Vue.prototype.$axios = axios

Vue.use(ElComponentPlugin,[
  CollapseTransition,
  Button,
  Row,
  Col,
  Menu,
  MenuItem,Card,Pagination
])
Vue.component('Container',Container)
Vue.component('LinkToPage',LinkToPage)
Vue.component('Framework',Framework)

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
