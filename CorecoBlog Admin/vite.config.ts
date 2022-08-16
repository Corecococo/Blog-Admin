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
        host:true,
        //配置代理
        proxy:{
            '/dev-apis':{
                target:'https://192.168.31.24:7019',
                //不验证SSL安全证书
                secure:false,
                changeOrigin:true,
                rewrite: (path) => path.replace(/^\/dev-apis\//, '')
            }
        },
        open:true
    }
})
