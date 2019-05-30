import Vue from 'vue'
import App from './App.vue'
import * as VueGoogleMaps from 'vue2-google-maps'

Vue.use(VueGoogleMaps, {
  load: {
    key: 'AIzaSyCpy8ltkjUnf7GG9ByXnENjois9TniPTC0',
    libraries: 'places' 
  }
});

new Vue({
  el: '#app',
  components: { App },
  template: '<App/>'
});