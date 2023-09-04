import {fileURLToPath, URL} from "node:url";
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import vueJsx from '@vitejs/plugin-vue-jsx'
import Components from 'unplugin-vue-components/vite'
import { VantResolver } from 'unplugin-vue-components/resolvers'
import { resolve } from 'path'


export default ({ mode }: any) => {
    return defineConfig({
        plugins: [
            vue(),
            vueJsx(),
            Components({
                resolvers: [VantResolver()]
            })
        ],
        resolve: {
          alias: {
              '@': resolve(__dirname, './src'),
          }
        },
        css: {
            preprocessorOptions: {
                scss: {
                    additionalData: `@import "./src/bem.scss";`
                }
            }
        }
    })
}
