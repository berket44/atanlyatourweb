// vite.config.ts
import { defineConfig } from "file:///app/code/node_modules/.pnpm/vite@5.4.20_@types+node@24.2.1/node_modules/vite/dist/node/index.js";
import react from "file:///app/code/node_modules/.pnpm/@vitejs+plugin-react-swc@4.0.0_vite@5.4.20_@types+node@24.2.1_/node_modules/@vitejs/plugin-react-swc/index.js";
import path from "path";

// server/index.ts
import "file:///app/code/node_modules/.pnpm/dotenv@17.2.1/node_modules/dotenv/config.js";
import express from "file:///app/code/node_modules/.pnpm/express@5.1.0/node_modules/express/index.js";
import cors from "file:///app/code/node_modules/.pnpm/cors@2.8.5/node_modules/cors/lib/index.js";

// server/routes/demo.ts
var handleDemo = (req, res) => {
  const response = {
    message: "Hello from Express server"
  };
  res.status(200).json(response);
};

// server/index.ts
function createServer() {
  const app = express();
  app.use(cors());
  app.use(express.json());
  app.use(express.urlencoded({ extended: true }));
  app.get("/api/ping", (_req, res) => {
    const ping = process.env.PING_MESSAGE ?? "ping";
    res.json({ message: ping });
  });
  app.get("/api/demo", handleDemo);
  return app;
}

// vite.config.ts
var __vite_injected_original_dirname = "/app/code";
var vite_config_default = defineConfig(({ mode }) => ({
  server: {
    host: "::",
    port: 8080,
    fs: {
      // Allow serving files from project root (index.html), client and shared
      allow: ["./", "./client", "./shared"],
      deny: [".env", ".env.*", "*.{crt,pem}", "**/.git/**", "server/**"]
    }
  },
  build: {
    outDir: "dist/spa"
  },
  plugins: [react({ fastRefresh: false }), expressPlugin()],
  resolve: {
    alias: {
      "@": path.resolve(__vite_injected_original_dirname, "./client"),
      "@shared": path.resolve(__vite_injected_original_dirname, "./shared"),
      // Force single React / ReactDOM instance to avoid hook mismatches from duplicate copies
      react: path.resolve(__vite_injected_original_dirname, "./node_modules/react"),
      "react-dom": path.resolve(__vite_injected_original_dirname, "./node_modules/react-dom")
    },
    // Ensure Vite doesn't bundle multiple copies of React
    dedupe: ["react", "react-dom"]
  },
  optimizeDeps: {
    include: ["react", "react-dom"]
  }
}));
function expressPlugin() {
  return {
    name: "express-plugin",
    apply: "serve",
    // Only apply during development (serve mode)
    configureServer(server) {
      const app = createServer();
      server.middlewares.use(app);
    }
  };
}
export {
  vite_config_default as default
};
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsidml0ZS5jb25maWcudHMiLCAic2VydmVyL2luZGV4LnRzIiwgInNlcnZlci9yb3V0ZXMvZGVtby50cyJdLAogICJzb3VyY2VzQ29udGVudCI6IFsiY29uc3QgX192aXRlX2luamVjdGVkX29yaWdpbmFsX2Rpcm5hbWUgPSBcIi9hcHAvY29kZVwiO2NvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9maWxlbmFtZSA9IFwiL2FwcC9jb2RlL3ZpdGUuY29uZmlnLnRzXCI7Y29uc3QgX192aXRlX2luamVjdGVkX29yaWdpbmFsX2ltcG9ydF9tZXRhX3VybCA9IFwiZmlsZTovLy9hcHAvY29kZS92aXRlLmNvbmZpZy50c1wiO2ltcG9ydCB7IGRlZmluZUNvbmZpZywgUGx1Z2luIH0gZnJvbSBcInZpdGVcIjtcbmltcG9ydCByZWFjdCBmcm9tIFwiQHZpdGVqcy9wbHVnaW4tcmVhY3Qtc3djXCI7XG5pbXBvcnQgcGF0aCBmcm9tIFwicGF0aFwiO1xuaW1wb3J0IHsgY3JlYXRlU2VydmVyIH0gZnJvbSBcIi4vc2VydmVyXCI7XG5cbi8vIGh0dHBzOi8vdml0ZWpzLmRldi9jb25maWcvXG5leHBvcnQgZGVmYXVsdCBkZWZpbmVDb25maWcoKHsgbW9kZSB9KSA9PiAoe1xuICBzZXJ2ZXI6IHtcbiAgICBob3N0OiBcIjo6XCIsXG4gICAgcG9ydDogODA4MCxcbiAgICBmczoge1xuICAgICAgLy8gQWxsb3cgc2VydmluZyBmaWxlcyBmcm9tIHByb2plY3Qgcm9vdCAoaW5kZXguaHRtbCksIGNsaWVudCBhbmQgc2hhcmVkXG4gICAgICBhbGxvdzogW1wiLi9cIiwgXCIuL2NsaWVudFwiLCBcIi4vc2hhcmVkXCJdLFxuICAgICAgZGVueTogW1wiLmVudlwiLCBcIi5lbnYuKlwiLCBcIioue2NydCxwZW19XCIsIFwiKiovLmdpdC8qKlwiLCBcInNlcnZlci8qKlwiXSxcbiAgICB9LFxuICB9LFxuICBidWlsZDoge1xuICAgIG91dERpcjogXCJkaXN0L3NwYVwiLFxuICB9LFxuICBwbHVnaW5zOiBbcmVhY3QoeyBmYXN0UmVmcmVzaDogZmFsc2UgfSksIGV4cHJlc3NQbHVnaW4oKV0sXG4gIHJlc29sdmU6IHtcbiAgICBhbGlhczoge1xuICAgICAgXCJAXCI6IHBhdGgucmVzb2x2ZShfX2Rpcm5hbWUsIFwiLi9jbGllbnRcIiksXG4gICAgICBcIkBzaGFyZWRcIjogcGF0aC5yZXNvbHZlKF9fZGlybmFtZSwgXCIuL3NoYXJlZFwiKSxcbiAgICAgIC8vIEZvcmNlIHNpbmdsZSBSZWFjdCAvIFJlYWN0RE9NIGluc3RhbmNlIHRvIGF2b2lkIGhvb2sgbWlzbWF0Y2hlcyBmcm9tIGR1cGxpY2F0ZSBjb3BpZXNcbiAgICAgIHJlYWN0OiBwYXRoLnJlc29sdmUoX19kaXJuYW1lLCBcIi4vbm9kZV9tb2R1bGVzL3JlYWN0XCIpLFxuICAgICAgXCJyZWFjdC1kb21cIjogcGF0aC5yZXNvbHZlKF9fZGlybmFtZSwgXCIuL25vZGVfbW9kdWxlcy9yZWFjdC1kb21cIiksXG4gICAgfSxcbiAgICAvLyBFbnN1cmUgVml0ZSBkb2Vzbid0IGJ1bmRsZSBtdWx0aXBsZSBjb3BpZXMgb2YgUmVhY3RcbiAgICBkZWR1cGU6IFtcInJlYWN0XCIsIFwicmVhY3QtZG9tXCJdLFxuICB9LFxuICBvcHRpbWl6ZURlcHM6IHtcbiAgICBpbmNsdWRlOiBbXCJyZWFjdFwiLCBcInJlYWN0LWRvbVwiXSxcbiAgfSxcbn0pKTtcblxuZnVuY3Rpb24gZXhwcmVzc1BsdWdpbigpOiBQbHVnaW4ge1xuICByZXR1cm4ge1xuICAgIG5hbWU6IFwiZXhwcmVzcy1wbHVnaW5cIixcbiAgICBhcHBseTogXCJzZXJ2ZVwiLCAvLyBPbmx5IGFwcGx5IGR1cmluZyBkZXZlbG9wbWVudCAoc2VydmUgbW9kZSlcbiAgICBjb25maWd1cmVTZXJ2ZXIoc2VydmVyKSB7XG4gICAgICBjb25zdCBhcHAgPSBjcmVhdGVTZXJ2ZXIoKTtcblxuICAgICAgLy8gQWRkIEV4cHJlc3MgYXBwIGFzIG1pZGRsZXdhcmUgdG8gVml0ZSBkZXYgc2VydmVyXG4gICAgICBzZXJ2ZXIubWlkZGxld2FyZXMudXNlKGFwcCk7XG4gICAgfSxcbiAgfTtcbn1cbiIsICJjb25zdCBfX3ZpdGVfaW5qZWN0ZWRfb3JpZ2luYWxfZGlybmFtZSA9IFwiL2FwcC9jb2RlL3NlcnZlclwiO2NvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9maWxlbmFtZSA9IFwiL2FwcC9jb2RlL3NlcnZlci9pbmRleC50c1wiO2NvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9pbXBvcnRfbWV0YV91cmwgPSBcImZpbGU6Ly8vYXBwL2NvZGUvc2VydmVyL2luZGV4LnRzXCI7aW1wb3J0IFwiZG90ZW52L2NvbmZpZ1wiO1xuaW1wb3J0IGV4cHJlc3MgZnJvbSBcImV4cHJlc3NcIjtcbmltcG9ydCBjb3JzIGZyb20gXCJjb3JzXCI7XG5pbXBvcnQgeyBoYW5kbGVEZW1vIH0gZnJvbSBcIi4vcm91dGVzL2RlbW9cIjtcblxuZXhwb3J0IGZ1bmN0aW9uIGNyZWF0ZVNlcnZlcigpIHtcbiAgY29uc3QgYXBwID0gZXhwcmVzcygpO1xuXG4gIC8vIE1pZGRsZXdhcmVcbiAgYXBwLnVzZShjb3JzKCkpO1xuICBhcHAudXNlKGV4cHJlc3MuanNvbigpKTtcbiAgYXBwLnVzZShleHByZXNzLnVybGVuY29kZWQoeyBleHRlbmRlZDogdHJ1ZSB9KSk7XG5cbiAgLy8gRXhhbXBsZSBBUEkgcm91dGVzXG4gIGFwcC5nZXQoXCIvYXBpL3BpbmdcIiwgKF9yZXEsIHJlcykgPT4ge1xuICAgIGNvbnN0IHBpbmcgPSBwcm9jZXNzLmVudi5QSU5HX01FU1NBR0UgPz8gXCJwaW5nXCI7XG4gICAgcmVzLmpzb24oeyBtZXNzYWdlOiBwaW5nIH0pO1xuICB9KTtcblxuICBhcHAuZ2V0KFwiL2FwaS9kZW1vXCIsIGhhbmRsZURlbW8pO1xuXG4gIHJldHVybiBhcHA7XG59XG4iLCAiY29uc3QgX192aXRlX2luamVjdGVkX29yaWdpbmFsX2Rpcm5hbWUgPSBcIi9hcHAvY29kZS9zZXJ2ZXIvcm91dGVzXCI7Y29uc3QgX192aXRlX2luamVjdGVkX29yaWdpbmFsX2ZpbGVuYW1lID0gXCIvYXBwL2NvZGUvc2VydmVyL3JvdXRlcy9kZW1vLnRzXCI7Y29uc3QgX192aXRlX2luamVjdGVkX29yaWdpbmFsX2ltcG9ydF9tZXRhX3VybCA9IFwiZmlsZTovLy9hcHAvY29kZS9zZXJ2ZXIvcm91dGVzL2RlbW8udHNcIjtpbXBvcnQgeyBSZXF1ZXN0SGFuZGxlciB9IGZyb20gXCJleHByZXNzXCI7XG5pbXBvcnQgeyBEZW1vUmVzcG9uc2UgfSBmcm9tIFwiQHNoYXJlZC9hcGlcIjtcblxuZXhwb3J0IGNvbnN0IGhhbmRsZURlbW86IFJlcXVlc3RIYW5kbGVyID0gKHJlcSwgcmVzKSA9PiB7XG4gIGNvbnN0IHJlc3BvbnNlOiBEZW1vUmVzcG9uc2UgPSB7XG4gICAgbWVzc2FnZTogXCJIZWxsbyBmcm9tIEV4cHJlc3Mgc2VydmVyXCIsXG4gIH07XG4gIHJlcy5zdGF0dXMoMjAwKS5qc29uKHJlc3BvbnNlKTtcbn07XG4iXSwKICAibWFwcGluZ3MiOiAiO0FBQTZNLFNBQVMsb0JBQTRCO0FBQ2xQLE9BQU8sV0FBVztBQUNsQixPQUFPLFVBQVU7OztBQ0ZxTSxPQUFPO0FBQzdOLE9BQU8sYUFBYTtBQUNwQixPQUFPLFVBQVU7OztBQ0NWLElBQU0sYUFBNkIsQ0FBQyxLQUFLLFFBQVE7QUFDdEQsUUFBTSxXQUF5QjtBQUFBLElBQzdCLFNBQVM7QUFBQSxFQUNYO0FBQ0EsTUFBSSxPQUFPLEdBQUcsRUFBRSxLQUFLLFFBQVE7QUFDL0I7OztBREhPLFNBQVMsZUFBZTtBQUM3QixRQUFNLE1BQU0sUUFBUTtBQUdwQixNQUFJLElBQUksS0FBSyxDQUFDO0FBQ2QsTUFBSSxJQUFJLFFBQVEsS0FBSyxDQUFDO0FBQ3RCLE1BQUksSUFBSSxRQUFRLFdBQVcsRUFBRSxVQUFVLEtBQUssQ0FBQyxDQUFDO0FBRzlDLE1BQUksSUFBSSxhQUFhLENBQUMsTUFBTSxRQUFRO0FBQ2xDLFVBQU0sT0FBTyxRQUFRLElBQUksZ0JBQWdCO0FBQ3pDLFFBQUksS0FBSyxFQUFFLFNBQVMsS0FBSyxDQUFDO0FBQUEsRUFDNUIsQ0FBQztBQUVELE1BQUksSUFBSSxhQUFhLFVBQVU7QUFFL0IsU0FBTztBQUNUOzs7QUR0QkEsSUFBTSxtQ0FBbUM7QUFNekMsSUFBTyxzQkFBUSxhQUFhLENBQUMsRUFBRSxLQUFLLE9BQU87QUFBQSxFQUN6QyxRQUFRO0FBQUEsSUFDTixNQUFNO0FBQUEsSUFDTixNQUFNO0FBQUEsSUFDTixJQUFJO0FBQUE7QUFBQSxNQUVGLE9BQU8sQ0FBQyxNQUFNLFlBQVksVUFBVTtBQUFBLE1BQ3BDLE1BQU0sQ0FBQyxRQUFRLFVBQVUsZUFBZSxjQUFjLFdBQVc7QUFBQSxJQUNuRTtBQUFBLEVBQ0Y7QUFBQSxFQUNBLE9BQU87QUFBQSxJQUNMLFFBQVE7QUFBQSxFQUNWO0FBQUEsRUFDQSxTQUFTLENBQUMsTUFBTSxFQUFFLGFBQWEsTUFBTSxDQUFDLEdBQUcsY0FBYyxDQUFDO0FBQUEsRUFDeEQsU0FBUztBQUFBLElBQ1AsT0FBTztBQUFBLE1BQ0wsS0FBSyxLQUFLLFFBQVEsa0NBQVcsVUFBVTtBQUFBLE1BQ3ZDLFdBQVcsS0FBSyxRQUFRLGtDQUFXLFVBQVU7QUFBQTtBQUFBLE1BRTdDLE9BQU8sS0FBSyxRQUFRLGtDQUFXLHNCQUFzQjtBQUFBLE1BQ3JELGFBQWEsS0FBSyxRQUFRLGtDQUFXLDBCQUEwQjtBQUFBLElBQ2pFO0FBQUE7QUFBQSxJQUVBLFFBQVEsQ0FBQyxTQUFTLFdBQVc7QUFBQSxFQUMvQjtBQUFBLEVBQ0EsY0FBYztBQUFBLElBQ1osU0FBUyxDQUFDLFNBQVMsV0FBVztBQUFBLEVBQ2hDO0FBQ0YsRUFBRTtBQUVGLFNBQVMsZ0JBQXdCO0FBQy9CLFNBQU87QUFBQSxJQUNMLE1BQU07QUFBQSxJQUNOLE9BQU87QUFBQTtBQUFBLElBQ1AsZ0JBQWdCLFFBQVE7QUFDdEIsWUFBTSxNQUFNLGFBQWE7QUFHekIsYUFBTyxZQUFZLElBQUksR0FBRztBQUFBLElBQzVCO0FBQUEsRUFDRjtBQUNGOyIsCiAgIm5hbWVzIjogW10KfQo=
