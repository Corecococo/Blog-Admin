import { createApp } from 'vue'
import App from './App.vue'
import router from "./router";
/*必须引用该样式文件，否则某些组件样式会显示错误*/
import 'element-plus/dist/index.css'
import * as ElementPlusIconsVue from '@element-plus/icons-vue'

let app = createApp(App);
for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
    app.component(key, component)
}
app.use(router);
app.mount('#app');
