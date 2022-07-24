import {defineConfig} from 'vite'
import vue from '@vitejs/plugin-vue'
import AutoImport from 'unplugin-auto-import/vite'
import Components from 'unplugin-vue-components/vite'
import {ElementPlusResolver} from 'unplugin-vue-components/resolvers';

// https://vitejs.dev/config/

export default defineConfig({
    plugins: [
        vue(),
        /*配置Element组件自动引入的插件*/
        AutoImport({
            // 自动导入 Vue 相关函数，如：ref, reactive, toRef 等
            imports:['vue'],
            // 自动导入 Element Plus 相关函数，如：ElMessage, ElMessageBox... (带样式)
            resolvers: [
                ElementPlusResolver()
            ],
        }),
        Components({
            resolvers: [
                ElementPlusResolver(),

            ],
        })
    ],
    server:{
        port: 8888,
        https: true,
        open: true,
        host:true
    }
})