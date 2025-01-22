import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig(() => {
return {
    server: {
    open: true,
    proxy: {
        "/api": {
        target: "http://sewnash-api-env.eba-mcb7difs.us-east-1.elasticb/",
        changeOrigin: true,
        secure: false,
        },
    },
    },
    build: {
    outDir: "build",
    },
    plugins: [react()],
};
});
