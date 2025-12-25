import '@unocss/reset/tailwind.css'
import { createPinia } from 'pinia'
import 'uno.css'
import { createApp } from 'vue'
import { createHead } from '@vueuse/head'
import lazyPlugin from 'vue3-lazy'
import { LoadingPlugin } from 'vue-loading-overlay'
import App from './App.vue'
import loading from './assets/logo.jpg'
import error from './assets/not-found.jpg'
import { worker } from './mocks/browser'
import { setupRouter } from './router'
import './style.css'
import 'vue-loading-overlay/dist/css/index.css'

if (process.env.NODE_ENV === 'development')
  worker.start()

async function setupApp() {
  const pinia = createPinia()
  const app = createApp(App)
  const head = createHead()
  await setupRouter(app)
  app.use(pinia)
  app.use(head)
  app.use(LoadingPlugin)
  app.use(lazyPlugin, {
    loading,
    error,
  })
  app.mount('#app')
}

setupApp().catch(e => console.error(e))
