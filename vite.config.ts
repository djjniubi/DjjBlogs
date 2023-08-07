/*
 * @Description: 
 * @Author: 邓建军
 * @Date: 2023-07-31 08:29:02
 * @LastEditTime: 2023-08-07 15:06:47
 */
import { defineConfig,ConfigEnv,loadEnv,UserConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import {resolve} from "path"
// export default defineConfig({
//   plugins: [vue()],
//   resolve:{
//     alias:{
//       "@":resolve(__dirname,"./src")
//     }
//   },
//   server:{
//     host: "0.0.0.0",
//     // port:3000,
//     open:true,
//     base:"",
//     proxy:{
//       "/api":{
//         target:"http://localhost:3000",
//         changeOrigin: true, //开启代理
//         rewrite: (path) => path.replace(/^\/api/, '')
//       }
//     }
//   }
// })

export default defineConfig(({mode}:ConfigEnv):UserConfig =>{
  const root =process.cwd();
  const viteEnv =loadEnv(mode,root)
  console.log("env",viteEnv);
  
return {
  plugins: [vue()],
  resolve:{
    alias:{
      "@":resolve(__dirname,"./src")
    }
  },
    server:{
    host: "0.0.0.0",
    // port:3000,
    open:true,
    base:"",
    proxy:{
      "/api":{
        target:viteEnv.VITE_API_URL,
        changeOrigin: true, //开启代理
        rewrite: (path) => path.replace(/^\/api/, '')
      }
    }
  },
  esbuild:{
    pure:viteEnv.VITE_USER_NODE_ENV==='production'?["console.log", "debugger"] : []
  },
  build:{
    outDir:"dist",
    assetsDir:"assets",
    rollupOptions: {
      output: {
        chunkFileNames: "assets/js/[name]-[hash].js",
        entryFileNames: "assets/js/[name]-[hash].js",
        assetFileNames: "assets/[ext]/[name]-[hash].[ext]"
      }
    }
  }
}
})
