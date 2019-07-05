// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import global from './global'
import iView from 'iview'
import jquery from 'jquery'
// import 'iview/dist/styles/iview.css'
// import './assets/theme/dist/iview.css'
import './assets/styles/common.less'
import locale from 'iview/dist/locale/zh-CN'

Vue.prototype.global = global;
Vue.prototype.$ = jquery;
Vue.prototype.router = router;

Vue.use(iView, {locale})

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
