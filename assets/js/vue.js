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