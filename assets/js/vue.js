import VueExpandableImage from 'vue-expandable-image'
Vue.use(VueExpandableImage)
const app = Vue.createApp({
  el: '#vapp',
  data() {
    return {
      display: 'redbox',
      hello: 'Hello World',
    }
  }
})
app.mount('#vapp')