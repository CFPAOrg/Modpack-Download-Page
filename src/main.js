import Vue from "vue";
import axios from 'axios';
import App from "./App";
import Tooltip from 'buefy/dist/components/Tooltip'


import 'buefy/dist/buefy.css';
import 'loaders.css/loaders.css';
import './assets/style.css';

Vue.config.productionTip = false;
Vue.prototype.$http = axios;

Vue.use(Tooltip);

/* eslint-disable no-new */
new Vue({
	el: "#app",
	render: h => h(App)
});
