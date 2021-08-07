import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import "element-ui/lib/theme-chalk/index.css";
import "@/style/index.scss";

require("./libs/Mock/Mock");
require("@/assets/font/myFont");
import axios from "@/utils/request";
import dayjs from "dayjs";
import VueHighlightJS from "vue-highlightjs";
import "highlight.js/styles/atom-one-dark.css";
import mavonEditor from "mavon-editor";
import "mavon-editor/dist/css/index.css";
import VueClipboard from "vue-clipboard2";
import "element-ui/lib/theme-chalk/display.css";
import copy from "@/directive/copy";
import log from "@/utils/log";

//transition
// fade/zoom 等
import "element-ui/lib/theme-chalk/base.css";
// collapse 展开折叠
import CollapseTransition from "element-ui/lib/transitions/collapse-transition";

//plugin
import {ElComponentPlugin} from "@/plugins/element-components";


//component
import {
    Button,
    Row,
    Col,
    Menu,
    MenuItem,
    Card,
    Pagination,
    Dropdown,
    DropdownMenu,
    DropdownItem,
    Skeleton,
    SkeletonItem,
    Message,
    Form,
    FormItem,
    Input,
    Tag,
    Dialog,
    Popover,
    TabPane,
    Tabs,
} from "element-ui";
import Container from "@/components/Layout/Container";
import LinkToPage from "@/components/LinkToPage";
import Framework from "@/components/Layout/Framework";
import cTag from "@/components/Tag";

VueClipboard.config.autoSetContainer = true; // add this line
Vue.use(VueClipboard);
Vue.use(VueHighlightJS);
Vue.use(mavonEditor);
Vue.use(ElComponentPlugin, [
    Button,
    Row,
    Col,
    Menu,
    MenuItem,
    Card,
    Pagination,
    Dropdown,
    DropdownMenu,
    DropdownItem,
    Skeleton,
    SkeletonItem,
    Form,
    FormItem,
    Input,
    Tag,
    Dialog,
    Popover,
    Tabs,
    TabPane,
]);

Vue.component(CollapseTransition.name, CollapseTransition);
Vue.component("Container", Container);
Vue.component("LinkToPage", LinkToPage);
Vue.component("Framework", Framework);
Vue.component("Tag", cTag);

//config
Vue.config.productionTip = false;
//全局配置
Vue.prototype.$ELEMENT = {size: "small", zIndex: 3000};
Vue.prototype.$axios = axios;
Vue.prototype.$dayjs = dayjs;
Vue.prototype.$log = log;
Vue.prototype.$message = Message;

Vue.directive("highlight", function (el) {
    hljs.configure({useBR: true});
    let blocks = el.querySelectorAll("pre code");
    blocks.forEach((block) => {
        hljs.highlightBlock(block);
    });
});

Vue.directive("copy", copy);

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
