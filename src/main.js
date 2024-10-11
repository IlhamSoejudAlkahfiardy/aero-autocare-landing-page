import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import 'flowbite'
import { MotionPlugin } from '@vueuse/motion'

createApp(App).use(MotionPlugin).mount('#app')
