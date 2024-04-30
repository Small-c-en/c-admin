import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'

// 引入 echarts
import * as echarts from 'echarts'
import NProgress from 'nprogress'
import 'nprogress/nprogress.css'
NProgress.configure({
  easing: 'ease',
  speed: 500,
  showSpinner: false,
  trickleSpeed: 200,
  minimum: 0.3
})

//路由监听
router.beforeEach((to, from, next) => {
  NProgress.start()
  next()
})

//路由跳转结束
router.afterEach(() => {
  NProgress.done()
})

const app = createApp(App)
// 全局挂载 echarts
app.config.globalProperties.$echarts = echarts
app.use(createPinia())
app.use(router)

app.mount('#app')
