import VueExpandableImage from 'vue-expandable-image'
import {BootstrapVue, BootstrapVueIcons} from bootstrap-vue
Vue.use(VueExpandableImage)
Vue.use(BootstrapVueIcons)
Vue.use(BootstrapVue)
import { library } from '@fortawesome/fontawesome-svg-core'
import { faUserSecret } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

library.add(faUserSecret)

Vue.component('font-awesome-icon', FontAwesomeIcon)

Vue.config.productionTip = false


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