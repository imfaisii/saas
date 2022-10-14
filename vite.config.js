import { defineConfig } from 'vite';
import laravel from 'laravel-vite-plugin';

export default defineConfig({
    build: {
        rollupOptions: {
            output: {
                chunkFileNames: 'backend/assets/js/[name]-[hash].js',
                entryFileNames: 'backend/assets/js/[name]-[hash].js',

                assetFileNames: ({ name }) => {
                    if (/\.(gif|jpe?g|png|svg)$/.test(name ?? '')) {
                        return 'backend/assets/images/[name]-[hash][extname]';
                    }

                    if (/\.css$/.test(name ?? '')) {
                        return 'backend/assets/css/[name]-[hash][extname]';
                    }
                    return 'backend/assets/[name]-[hash][extname]';
                },
            },
        }
    },
    plugins: [
        laravel({
            input: [
                'resources/css/dashboard/guest.css',
                'resources/css/dashboard/app.js',
                'resources/css/landing/app.css'
            ],
            refresh: false,
        }),
    ],
});
