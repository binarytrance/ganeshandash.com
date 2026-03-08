import mdx from '@mdx-js/rollup';
import { reactRouter } from '@react-router/dev/vite';
import tailwindcss from '@tailwindcss/vite';
import { defineConfig } from 'vite';
import tsconfigPaths from 'vite-tsconfig-paths';
import netlifyPlugin from '@netlify/vite-plugin-react-router';

export default defineConfig({
    plugins: [
        tailwindcss(),
        mdx({ providerImportSource: "@mdx-js/react" }),
        reactRouter(),
        tsconfigPaths({ projects: ['./tsconfig.json'] }),
        netlifyPlugin()
    ],
    resolve: {
        dedupe: ['react', 'react-dom', 'react-dom/client', 'react/jsx-runtime', 'react/jsx-dev-runtime']
    }
});
