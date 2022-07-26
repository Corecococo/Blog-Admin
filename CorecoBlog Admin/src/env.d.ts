/// <reference types="vite/client" />

declare module '*.vue' {
  import type { DefineComponent } from 'vue'
  // eslint-disable-next-line @typescript-eslint/no-explicit-any, @typescript-eslint/ban-types
  const component: DefineComponent<{}, {}, any>
  export default component
}

//定义env成员，使环境变量获得智能提示
interface ImportMetaEnv {
  readonly VITE_APP_SERVICE_URL:string,
  readonly VITE_APP_BASE_API:string
  // 更多环境变量...
}

interface ImportMeta {
  readonly env: ImportMetaEnv
}