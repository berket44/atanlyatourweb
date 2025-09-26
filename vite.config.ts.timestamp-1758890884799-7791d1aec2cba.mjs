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
      "@shared": path.resolve(__vite_injected_original_dirname, "./shared")
    }
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
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsidml0ZS5jb25maWcudHMiLCAic2VydmVyL2luZGV4LnRzIiwgInNlcnZlci9yb3V0ZXMvZGVtby50cyJdLAogICJzb3VyY2VzQ29udGVudCI6IFsiY29uc3QgX192aXRlX2luamVjdGVkX29yaWdpbmFsX2Rpcm5hbWUgPSBcIi9hcHAvY29kZVwiO2NvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9maWxlbmFtZSA9IFwiL2FwcC9jb2RlL3ZpdGUuY29uZmlnLnRzXCI7Y29uc3QgX192aXRlX2luamVjdGVkX29yaWdpbmFsX2ltcG9ydF9tZXRhX3VybCA9IFwiZmlsZTovLy9hcHAvY29kZS92aXRlLmNvbmZpZy50c1wiO2ltcG9ydCB7IGRlZmluZUNvbmZpZywgUGx1Z2luIH0gZnJvbSBcInZpdGVcIjtcbmltcG9ydCByZWFjdCBmcm9tIFwiQHZpdGVqcy9wbHVnaW4tcmVhY3Qtc3djXCI7XG5pbXBvcnQgcGF0aCBmcm9tIFwicGF0aFwiO1xuaW1wb3J0IHsgY3JlYXRlU2VydmVyIH0gZnJvbSBcIi4vc2VydmVyXCI7XG5cbi8vIGh0dHBzOi8vdml0ZWpzLmRldi9jb25maWcvXG5leHBvcnQgZGVmYXVsdCBkZWZpbmVDb25maWcoKHsgbW9kZSB9KSA9PiAoe1xuICBzZXJ2ZXI6IHtcbiAgICBob3N0OiBcIjo6XCIsXG4gICAgcG9ydDogODA4MCxcbiAgICBmczoge1xuICAgICAgLy8gQWxsb3cgc2VydmluZyBmaWxlcyBmcm9tIHByb2plY3Qgcm9vdCAoaW5kZXguaHRtbCksIGNsaWVudCBhbmQgc2hhcmVkXG4gICAgICBhbGxvdzogW1wiLi9cIiwgXCIuL2NsaWVudFwiLCBcIi4vc2hhcmVkXCJdLFxuICAgICAgZGVueTogW1wiLmVudlwiLCBcIi5lbnYuKlwiLCBcIioue2NydCxwZW19XCIsIFwiKiovLmdpdC8qKlwiLCBcInNlcnZlci8qKlwiXSxcbiAgICB9LFxuICB9LFxuICBidWlsZDoge1xuICAgIG91dERpcjogXCJkaXN0L3NwYVwiLFxuICB9LFxuICBwbHVnaW5zOiBbcmVhY3QoeyBmYXN0UmVmcmVzaDogZmFsc2UgfSksIGV4cHJlc3NQbHVnaW4oKV0sXG4gIHJlc29sdmU6IHtcbiAgICBhbGlhczoge1xuICAgICAgXCJAXCI6IHBhdGgucmVzb2x2ZShfX2Rpcm5hbWUsIFwiLi9jbGllbnRcIiksXG4gICAgICBcIkBzaGFyZWRcIjogcGF0aC5yZXNvbHZlKF9fZGlybmFtZSwgXCIuL3NoYXJlZFwiKSxcbiAgICB9LFxuICB9LFxufSkpO1xuXG5mdW5jdGlvbiBleHByZXNzUGx1Z2luKCk6IFBsdWdpbiB7XG4gIHJldHVybiB7XG4gICAgbmFtZTogXCJleHByZXNzLXBsdWdpblwiLFxuICAgIGFwcGx5OiBcInNlcnZlXCIsIC8vIE9ubHkgYXBwbHkgZHVyaW5nIGRldmVsb3BtZW50IChzZXJ2ZSBtb2RlKVxuICAgIGNvbmZpZ3VyZVNlcnZlcihzZXJ2ZXIpIHtcbiAgICAgIGNvbnN0IGFwcCA9IGNyZWF0ZVNlcnZlcigpO1xuXG4gICAgICAvLyBBZGQgRXhwcmVzcyBhcHAgYXMgbWlkZGxld2FyZSB0byBWaXRlIGRldiBzZXJ2ZXJcbiAgICAgIHNlcnZlci5taWRkbGV3YXJlcy51c2UoYXBwKTtcbiAgICB9LFxuICB9O1xufVxuIiwgImNvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9kaXJuYW1lID0gXCIvYXBwL2NvZGUvc2VydmVyXCI7Y29uc3QgX192aXRlX2luamVjdGVkX29yaWdpbmFsX2ZpbGVuYW1lID0gXCIvYXBwL2NvZGUvc2VydmVyL2luZGV4LnRzXCI7Y29uc3QgX192aXRlX2luamVjdGVkX29yaWdpbmFsX2ltcG9ydF9tZXRhX3VybCA9IFwiZmlsZTovLy9hcHAvY29kZS9zZXJ2ZXIvaW5kZXgudHNcIjtpbXBvcnQgXCJkb3RlbnYvY29uZmlnXCI7XG5pbXBvcnQgZXhwcmVzcyBmcm9tIFwiZXhwcmVzc1wiO1xuaW1wb3J0IGNvcnMgZnJvbSBcImNvcnNcIjtcbmltcG9ydCB7IGhhbmRsZURlbW8gfSBmcm9tIFwiLi9yb3V0ZXMvZGVtb1wiO1xuXG5leHBvcnQgZnVuY3Rpb24gY3JlYXRlU2VydmVyKCkge1xuICBjb25zdCBhcHAgPSBleHByZXNzKCk7XG5cbiAgLy8gTWlkZGxld2FyZVxuICBhcHAudXNlKGNvcnMoKSk7XG4gIGFwcC51c2UoZXhwcmVzcy5qc29uKCkpO1xuICBhcHAudXNlKGV4cHJlc3MudXJsZW5jb2RlZCh7IGV4dGVuZGVkOiB0cnVlIH0pKTtcblxuICAvLyBFeGFtcGxlIEFQSSByb3V0ZXNcbiAgYXBwLmdldChcIi9hcGkvcGluZ1wiLCAoX3JlcSwgcmVzKSA9PiB7XG4gICAgY29uc3QgcGluZyA9IHByb2Nlc3MuZW52LlBJTkdfTUVTU0FHRSA/PyBcInBpbmdcIjtcbiAgICByZXMuanNvbih7IG1lc3NhZ2U6IHBpbmcgfSk7XG4gIH0pO1xuXG4gIGFwcC5nZXQoXCIvYXBpL2RlbW9cIiwgaGFuZGxlRGVtbyk7XG5cbiAgcmV0dXJuIGFwcDtcbn1cbiIsICJjb25zdCBfX3ZpdGVfaW5qZWN0ZWRfb3JpZ2luYWxfZGlybmFtZSA9IFwiL2FwcC9jb2RlL3NlcnZlci9yb3V0ZXNcIjtjb25zdCBfX3ZpdGVfaW5qZWN0ZWRfb3JpZ2luYWxfZmlsZW5hbWUgPSBcIi9hcHAvY29kZS9zZXJ2ZXIvcm91dGVzL2RlbW8udHNcIjtjb25zdCBfX3ZpdGVfaW5qZWN0ZWRfb3JpZ2luYWxfaW1wb3J0X21ldGFfdXJsID0gXCJmaWxlOi8vL2FwcC9jb2RlL3NlcnZlci9yb3V0ZXMvZGVtby50c1wiO2ltcG9ydCB7IFJlcXVlc3RIYW5kbGVyIH0gZnJvbSBcImV4cHJlc3NcIjtcbmltcG9ydCB7IERlbW9SZXNwb25zZSB9IGZyb20gXCJAc2hhcmVkL2FwaVwiO1xuXG5leHBvcnQgY29uc3QgaGFuZGxlRGVtbzogUmVxdWVzdEhhbmRsZXIgPSAocmVxLCByZXMpID0+IHtcbiAgY29uc3QgcmVzcG9uc2U6IERlbW9SZXNwb25zZSA9IHtcbiAgICBtZXNzYWdlOiBcIkhlbGxvIGZyb20gRXhwcmVzcyBzZXJ2ZXJcIixcbiAgfTtcbiAgcmVzLnN0YXR1cygyMDApLmpzb24ocmVzcG9uc2UpO1xufTtcbiJdLAogICJtYXBwaW5ncyI6ICI7QUFBNk0sU0FBUyxvQkFBNEI7QUFDbFAsT0FBTyxXQUFXO0FBQ2xCLE9BQU8sVUFBVTs7O0FDRnFNLE9BQU87QUFDN04sT0FBTyxhQUFhO0FBQ3BCLE9BQU8sVUFBVTs7O0FDQ1YsSUFBTSxhQUE2QixDQUFDLEtBQUssUUFBUTtBQUN0RCxRQUFNLFdBQXlCO0FBQUEsSUFDN0IsU0FBUztBQUFBLEVBQ1g7QUFDQSxNQUFJLE9BQU8sR0FBRyxFQUFFLEtBQUssUUFBUTtBQUMvQjs7O0FESE8sU0FBUyxlQUFlO0FBQzdCLFFBQU0sTUFBTSxRQUFRO0FBR3BCLE1BQUksSUFBSSxLQUFLLENBQUM7QUFDZCxNQUFJLElBQUksUUFBUSxLQUFLLENBQUM7QUFDdEIsTUFBSSxJQUFJLFFBQVEsV0FBVyxFQUFFLFVBQVUsS0FBSyxDQUFDLENBQUM7QUFHOUMsTUFBSSxJQUFJLGFBQWEsQ0FBQyxNQUFNLFFBQVE7QUFDbEMsVUFBTSxPQUFPLFFBQVEsSUFBSSxnQkFBZ0I7QUFDekMsUUFBSSxLQUFLLEVBQUUsU0FBUyxLQUFLLENBQUM7QUFBQSxFQUM1QixDQUFDO0FBRUQsTUFBSSxJQUFJLGFBQWEsVUFBVTtBQUUvQixTQUFPO0FBQ1Q7OztBRHRCQSxJQUFNLG1DQUFtQztBQU16QyxJQUFPLHNCQUFRLGFBQWEsQ0FBQyxFQUFFLEtBQUssT0FBTztBQUFBLEVBQ3pDLFFBQVE7QUFBQSxJQUNOLE1BQU07QUFBQSxJQUNOLE1BQU07QUFBQSxJQUNOLElBQUk7QUFBQTtBQUFBLE1BRUYsT0FBTyxDQUFDLE1BQU0sWUFBWSxVQUFVO0FBQUEsTUFDcEMsTUFBTSxDQUFDLFFBQVEsVUFBVSxlQUFlLGNBQWMsV0FBVztBQUFBLElBQ25FO0FBQUEsRUFDRjtBQUFBLEVBQ0EsT0FBTztBQUFBLElBQ0wsUUFBUTtBQUFBLEVBQ1Y7QUFBQSxFQUNBLFNBQVMsQ0FBQyxNQUFNLEVBQUUsYUFBYSxNQUFNLENBQUMsR0FBRyxjQUFjLENBQUM7QUFBQSxFQUN4RCxTQUFTO0FBQUEsSUFDUCxPQUFPO0FBQUEsTUFDTCxLQUFLLEtBQUssUUFBUSxrQ0FBVyxVQUFVO0FBQUEsTUFDdkMsV0FBVyxLQUFLLFFBQVEsa0NBQVcsVUFBVTtBQUFBLElBQy9DO0FBQUEsRUFDRjtBQUNGLEVBQUU7QUFFRixTQUFTLGdCQUF3QjtBQUMvQixTQUFPO0FBQUEsSUFDTCxNQUFNO0FBQUEsSUFDTixPQUFPO0FBQUE7QUFBQSxJQUNQLGdCQUFnQixRQUFRO0FBQ3RCLFlBQU0sTUFBTSxhQUFhO0FBR3pCLGFBQU8sWUFBWSxJQUFJLEdBQUc7QUFBQSxJQUM1QjtBQUFBLEVBQ0Y7QUFDRjsiLAogICJuYW1lcyI6IFtdCn0K
