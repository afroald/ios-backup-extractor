import Vue from 'vue';
import 'keen-ui/src/bootstrap';
import Window from './components/Window';

/* eslint-disable no-new */
new Vue({
  el: '#app',
  render: h => h(Window),
});
