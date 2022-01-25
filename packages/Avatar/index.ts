import { App, Plugin } from 'vue'
import Avatar from './src/index.vue'

export const AvatarPlugin: Plugin = {
  install(app: App) {
    app.component('my-avatar', Avatar);
  },
};

export {
  Avatar
}