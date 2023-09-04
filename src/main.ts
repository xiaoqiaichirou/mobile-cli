import { createApp } from 'vue'
import router from './router';

// 移动端适配
import 'lib-flexible/flexible.js'
// 引入全局样式
import '@/assets/style/index.scss';
// 引入组件样式
import 'vant/lib/index.css';

// 注册指令
import plugins from './plugins'

import App from './App.tsx'

const app = createApp(App)

app.use(router).use(plugins).mount('#app')

