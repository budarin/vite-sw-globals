import { version } from './package.json';
import { defineConfig, UserConfigFnObject, UserConfig } from 'vite';

import react from '@vitejs/plugin-react';

const viteConfig: UserConfigFnObject = defineConfig(() => {
    return {
        define: {
            VERSION: JSON.stringify(version),
        },

        plugins: [react()],

        resolve: {
            alias: {
                sw: '/src/sw',
                assets: '/src/assets',
                components: '/src/components',
            },
        },

        server: {
            host: true,
            port: 3000,
        },
    };
});

export default viteConfig;
