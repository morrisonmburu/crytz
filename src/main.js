import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import vuetify from './plugins/vuetify'
import 'roboto-fontface/css/roboto/roboto-fontface.css'
import 'material-design-icons-iconfont/dist/material-design-icons.css'
import VuePlyr from 'vue-plyr'
import 'vue-plyr/dist/vue-plyr.css'
import VueCoreVideoPlayer from 'vue-core-video-player'
import VueVideoPlayer from 'vue-video-player'
// require videojs style
import 'video.js/dist/video-js.css'
// import 'vue-video-player/src/custom-theme.css'
// eslint-disable-next-line no-global-assign
Event = new Vue()
Vue.config.productionTip = false

Vue.use(VuePlyr)
Vue.use(VueVideoPlayer)
Vue.use(VueCoreVideoPlayer)

new Vue({
  router,
  store,
  vuetify,
  render: h => h(App)
}).$mount('#app')
