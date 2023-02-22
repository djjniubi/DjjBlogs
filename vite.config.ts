import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import {resolve} from "path"
// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  resolve:{
    alias:{
      "@":resolve(__dirname,"./src")
    }
  },
  server:{
    port:3000,
    open:false,
    base:"",
    proxy:{
      "/api":{
        target:"http://localhost:3000",
        changeOrigin: true, //开启代理
        rewrite: (path) => path.replace(/^\/api/, '')
      }
    }
  }
})
