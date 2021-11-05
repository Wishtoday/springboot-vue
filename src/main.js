// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import VueResource from 'vue-resource'
import instance_ from './api/index'
import 'bootstrap/dist/css/bootstrap.css'
import Element from 'element-ui'

Vue.use(VueResource)
Vue.use(Element)

Vue.config.productionTip = false
Vue.http.options.emulateHTTP = true
Vue.http.options.emulateJSON = true
Vue.prototype.instance = instance_  //axios实例


/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App }
})
