import { App, Plugin } from 'vue'

import { ButtonPlugin } from './Button';
import { AvatarPlugin } from './Avatar';

const MyKitPlugin: Plugin = {
  install(app: App) {
    ButtonPlugin.install?.(app)
    AvatarPlugin.install?.(app)
  },
}

export default MyKitPlugin

export * from './Button';
export * from './Avatar';