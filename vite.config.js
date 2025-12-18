import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vite.dev/config/
export default defineConfig(() => {
    const repo = process.env.GITHUB_REPOSITORY?.split('/')[1];
    const isGitHubPages = process.env.GITHUB_PAGES === 'true';

    return {
        plugins: [react()],
        base: isGitHubPages && repo ? `/${repo}/` : '/',
    };
});
