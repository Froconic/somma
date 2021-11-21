import '@/.nuxt/color-mode/color-scheme.js'
import '@/.nuxt/color-mode/plugin.server.js'

if($colorMode.preference === 'dark') {
  $('#footer').removeClass('bg-black')
  $('#footer').addClass('bg-dark')

}