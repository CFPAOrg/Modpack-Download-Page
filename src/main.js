import Vue from "vue";
import axios from 'axios';
import App from "./App";
import Modal from 'buefy/dist/components/modal';

import 'loaders.css/loaders.css';
import './assets/style.scss';
// import './assets/iconfont.css';

Vue.config.productionTip = false;
Vue.prototype.$http = axios;

// Vue.use(Tooltip);
Vue.use(Modal);

/* eslint-disable no-new */
new Vue({
	el: "#app",
	render: h => h(App)
});
