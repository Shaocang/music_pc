import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'

createApp(App)
  .use(store)
  .use(router)
  .use(ElementPlus, { size: 'small', zIndex: 3000 }) // 设置表单组件默认尺寸以及弹出组件层级
  .mount('#app')
