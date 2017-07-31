import Vue from 'vue';
import 'keen-ui/src/bootstrap';

import App from './components/App.vue';

/* eslint-disable no-new */
new Vue({
  el: '#stage',
  render: h => h(App),
});
