import { resolve } from 'path'
import { defineConfig } from 'rollup'

const root = resolve(__dirname, "src")
const outDir =  resolve(__dirname, "dist")

export default defineConfig({
    root,
    build: {
        outDir,
        emptyOutDir: true,
        rollupOptions: {
            input: {
                menu: resolve(root, "menu.html"),
                main: resolve(root, "index.html"),
                page404: resolve(root, "404.html"),
                wip: resolve(root, "wip", "index.html"),
                wolf: resolve(root, "wolf", "index.html"),
                osiris: resolve(root, "wolf", "osiris", "index.html"),
            }
        }
    }
})