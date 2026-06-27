import { defineConfig, loadEnv } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";
import sharp from "sharp";

function viteImageOptimizer(videoDomain: string) {
  return {
    name: 'vite-image-optimizer',
    async generateBundle(_: any, bundle: any) {
      // 1. Compress all images in the bundle
      for (const fileName in bundle) {
        const file = bundle[fileName];
        if (file.type === 'asset' && /\.(jpe?g|png|webp)$/i.test(fileName)) {
          const source = file.source;
          if (Buffer.isBuffer(source) || source instanceof Uint8Array) {
            try {
              let optimizedBuffer: Buffer | null = null;
              if (/\.jpe?g$/i.test(fileName)) {
                optimizedBuffer = await sharp(source)
                  .jpeg({ quality: 80, progressive: true })
                  .toBuffer();
              } else if (/\.png$/i.test(fileName)) {
                optimizedBuffer = await sharp(source)
                  .png({ quality: 80, compressionLevel: 9 })
                  .toBuffer();
              } else if (/\.webp$/i.test(fileName)) {
                optimizedBuffer = await sharp(source)
                  .webp({ quality: 80 })
                  .toBuffer();
              }

              if (optimizedBuffer && optimizedBuffer.length < source.length) {
                file.source = optimizedBuffer;
                console.log(`[vite-image-optimizer] Optimized ${fileName}: ${(source.length / 1024).toFixed(1)}KB -> ${(optimizedBuffer.length / 1024).toFixed(1)}KB`);
              }
            } catch (err) {
              console.error(`[vite-image-optimizer] Error optimizing ${fileName}:`, err);
            }
          }
        }
      }
    },
    transformIndexHtml(html: string, ctx: any) {
      let processedHtml = html;
      if (videoDomain) {
        const preconnectTag = `\n    <link rel="preconnect" href="${videoDomain}" crossorigin />`;
        processedHtml = processedHtml.replace('</head>', `${preconnectTag}\n  </head>`);
      }

      if (!ctx.bundle) return processedHtml;
      let lcpFilename = '';
      for (const fileName in ctx.bundle) {
        if (fileName.includes('PhilosophyOptimized')) {
          lcpFilename = fileName;
          break;
        }
      }
      if (lcpFilename) {
        const preloadTag = `\n    <link rel="preload" href="/${lcpFilename}" as="image" fetchpriority="high" />`;
        console.log(`[vite-image-optimizer] Injected LCP preload link: ${preloadTag.trim()}`);
        return processedHtml.replace('</head>', `${preloadTag}\n  </head>`);
      }
      return processedHtml;
    }
  };
}

export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd(), "");
  const videoUrl = env.VITE_VIDEO_URL || "";
  let videoDomain = "";
  if (videoUrl) {
    try {
      videoDomain = new URL(videoUrl).origin;
    } catch (e) {
      console.warn("Invalid VITE_VIDEO_URL:", videoUrl);
    }
  }

  return {
    envPrefix: ["VITE_", "APP_"],
    server: {
      host: "::",
      port: 8080,
    },
    plugins: [react(), viteImageOptimizer(videoDomain)],
    resolve: {
      alias: {
        "@": path.resolve(__dirname, "./src"),
      },
    },
  build: {
    rollupOptions: {
      output: {
        manualChunks(id) {
          if (!id.includes("node_modules")) return;

          if (
            id.includes("/react/") ||
            id.includes("/react-dom/") ||
            id.includes("/react-router") ||
            id.includes("/scheduler/") ||
            id.includes("/@mui/") ||
            id.includes("/@emotion/") ||
            id.includes("/react-is/")
          ) {
            return "vendor-react-ui";
          }

          if (id.includes("/@reduxjs/") || id.includes("/react-redux/") || id.includes("/redux") || id.includes("/redux-persist/")) {
            return "vendor-redux";
          }

          if (id.includes("/@radix-ui/") || id.includes("/lucide-react/")) {
            return "vendor-ui";
          }
        },
      },
    },
  },
};
});
