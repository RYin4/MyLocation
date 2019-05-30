import Vue from 'vue'
import App from './App.vue'
import * as VueGoogleMaps from 'vue2-google-maps'

Vue.use(VueGoogleMaps, {
  load: {
    key: 'add your Google API key here',
    libraries: 'places' 
  }
});

new Vue({
  el: '#app',
  components: { App },
  template: '<App/>'
});