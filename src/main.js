import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import 'flowbite'
import { MotionPlugin } from '@vueuse/motion'
import router from './router'

createApp(App).use(router).use(MotionPlugin).mount('#app')
