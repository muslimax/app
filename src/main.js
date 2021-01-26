import Vue from 'vue'
import App from './App.vue'
import 'bootstrap/dist/css/bootstrap.min.css'
import {store} from './store/store'
import VueRouter from 'vue-router'
import Routes from './routes'

Vue.use(VueRouter);

const router = new VueRouter({
  routes: Routes,
  mode: 'history'
});

new Vue({
  
  el: '#app',
  render: h => h(App),
  router,
  store,
})
