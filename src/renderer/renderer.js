
import KeenUI from 'keen-ui';
import Vue from 'vue';
Vue.use(KeenUI);

import App from './components/App.vue';


new Vue(Object.assign({ el: '#stage' }, App));
