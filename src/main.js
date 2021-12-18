import Vue from 'vue'
import App from './App.vue'

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')

//Global filter created
Vue.filter('snippet' , val=>{
  if(!val || typeof(val) != 'string') return ''
  val = val.slice(0,100)
  return val
})
