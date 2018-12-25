import Vue from 'vue'
import App from './App'
import jquery from 'jquery'
require('./assets/resume.css')

require('bootstrap')
require('jquery.easing')

require('../node_modules/bootstrap/dist/css/bootstrap.css')
require('../node_modules/devicons/css/devicons.css')
require('../node_modules/devicon-2.2/devicon.css')
require('../node_modules/font-awesome/css/font-awesome.css')

Vue.prototype.jquery = jquery

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  render: h => h(App)
})
