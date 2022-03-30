import { createApp } from 'vue'
import { router } from "./router";
import App from './App.vue'
import Antd from 'ant-design-vue';
import { components } from "./components/components";
import { FontAwesomePlugin } from "./config/fontawesome";
import 'ant-design-vue/dist/antd.css';

createApp(App)
    .use(router)
    .use(Antd)
    .use(components)
    .use(FontAwesomePlugin)
    .mount('#app')
