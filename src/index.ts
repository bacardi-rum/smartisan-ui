import './style.css'
import './assets/scripts/smartisan.js'
import type { App, Plugin } from 'vue'
import * as components from './components/ui'
import { injectIconSprite } from './components/ui/icon'

// Re-export all components, types, and composables
export * from './components/ui'

// Programmatic Smartisan OS interaction API (if running in browser)
export const Smartisan = typeof window !== 'undefined' ? (window as any).Smartisan : undefined

// Vue plugin for global registration: app.use(SmartisanUI)
export const SmartisanUI: Plugin = {
  install(app: App) {
    // Inject native SVG sprite symbols on client side
    injectIconSprite()

    // Register all components and provide S-prefixed aliases
    for (const [key, component] of Object.entries(components)) {
      if (
        component &&
        typeof component === 'object' &&
        ('name' in component || '__name' in component || 'render' in component || 'setup' in component)
      ) {
        app.component(key, component as any)
        if (!key.startsWith('S')) {
          app.component(`S${key}`, component as any)
        }
      }
    }
  },
}

export default SmartisanUI

