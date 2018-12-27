// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import MintUI from 'mint-ui'
import 'mint-ui/lib/style.css'
import App from './App'
import router from './router'
import Vuex from 'vuex'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css';
Vue.use(MintUI)
Vue.use(Vuex)
Vue.use(ElementUI)
import iView from 'iview';
import 'iview/dist/styles/iview.css';
Vue.use(iView)
import animated from 'animate.css'
Vue.use(animated)

import mui from './lib/mui/css/mui.css'
import'./lib/mui/css/icons-extra.css'

import Axios from 'axios';
Vue.prototype.$axios = Axios

Vue.prototype.mui = mui
const store = new Vuex.Store({
  state: {
    title: "首页"
  },
  mutations: {
    changeTitle (state, title) {
      // 变更状态
      state.title = title
    }
  }
})

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
