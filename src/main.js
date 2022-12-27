import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import './assets/input.css'
import './assets/global.css'
import 'flowbite';

createApp(App).use(store).use(router).mount('#app')
