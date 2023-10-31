import {resolve} from 'path';
import {defineConfig} from "vite";

// export default defineConfig ({
//
//   build: {
//     rollupOptions: {
//       input: {
//         main: resolve(__dirname, 'index.html'),
//         nested: resolve(__dirname, 'nested/index.html'),
//       }
//     }
//   }
// });

export default defineConfig({
    root: resolve(__dirname, 'src'),
})
