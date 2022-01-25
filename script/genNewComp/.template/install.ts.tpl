import { App, Plugin } from 'vue'

{{ importPlugins }}

const MyKitPlugin: Plugin = {
  install(app: App) {
    {{ installPlugins }}
  },
}

export default MyKitPlugin

{{ exportPlugins }}