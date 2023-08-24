// https://unocss.dev/ 原子 css 库
import '@unocss/reset/tailwind-compat.css' // unocss reset
import 'virtual:uno.css'
import 'virtual:unocss-devtools'

import { setupNaive, } from '@/plugins';

// 你自定义的 css
import './styles/main.css'

import App from './App.vue'

const app = createApp(App)

setupNaive(app);

app.mount('#app')
